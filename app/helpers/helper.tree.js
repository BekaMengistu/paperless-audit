
function getAttributeValue(arry,fld,def)
{
	if(typeof(arry[fld])!="undefined")
	{
		return arry[fld];
	}
	def=def?def:"";
	return def;
}
function aggrigateFormData(vals)
{
	var count=0;
	var sum=0;
	var valuesArray=[]
	for(var  i in vals)
	{
		var row=vals[i];
		var rowVal=row;
		if(typeof(row)=="object" && row.value){rowVal=row.value}
		
		valuesArray.push(rowVal);
		count++;
        if(rowVal*1)
            {
                sum+=(rowVal*1);
                
            }
	}
	return {count:count,sum:sum,values:valuesArray};
}
function SUM(vals)
{
	var aggrigate=aggrigateFormData(vals)
	return aggrigate.sum;
}

function AdvancedTreeManager()
{
	this.tree=[];
	this.entities={};
	this.objHash={};
	this.treeHash={};
	
	this.addElements=function(list,id_fld,entity_name,fields)
	{
		var newHash={};
		for(var i in list)
		{
			var item=list[i];
			item.full_id=entity_name+item[id_fld];
			item.id=item[id_fld];
			item.entity_type=entity_name;
			if(fields)
			{
				for(var f in fields)
				item[f]=item[fields[f]];
			}
			newHash[entity_name+item[id_fld]]=item;
			this.objHash[entity_name+item[id_fld]]=item;
		}
		this.entities[entity_name]=newHash;
		return newHash;
	}
}
function TreeManager(option)
{
	this.tree=[];
	
	this.objHash={};
	this.treeHash={};
	
	this.toggleChildView=function(node)
	{
		node.expanded =!node.expanded;
	}
	
	this.toggleTreeNode=function(expandedArray,node)
{
	console.log("toggleTreeNode",expandedArray,node);
	expandedArray[node.id]=!expandedArray[node.id];
	if(!expandedArray[node.id])
	{
		delete(expandedArray[node.id]);
	}
}
	
	this.aggrigateData=function(fields,nodes,dont_reset)
	{
		nodes=nodes?nodes:this.tree;
		for(var n in nodes)
		{
			for(var f in fields)
			{
				var fld=fields[f];
				this.getAggrigateValue(nodes[n],fld,dont_reset)
			}
		}
		//
		
	}
	this.getAggrigateValue=function(node,fld,dont_reset)
	{
		if(!node.children.length)
		{
			
			node.data[fld]= node.data[fld]?(node.data[fld]/1):0;
			return node.data[fld];
		}
		else
		{
			if(!dont_reset)
			{
				node.data[fld]=0;
			}
			for(var i in node.children)
			{
				node.data[fld]+=this.getAggrigateValue(node.children[i],fld,dont_reset)
			}
			return node.data[fld];
		}
	}
	
	this.calculateDepth=function(nodes,indent)
	{
		indent=indent?indent:0;
		if(!nodes)
		{
			this.depth=0;
			nodes=this.tree;
		}
		this.depth=Math.max(this.depth,indent);
		for(var i in nodes)
		{
			var item=nodes[i];
			item.indent=indent;
			this.calculateDepth(item.children,indent+1);
			
		}
	}
	this.treeToTable=function(nodes,arry,indent,separate_totals)
	{
		indent=indent?indent:0;
		for(var i in nodes)
		{
			
			var item=nodes[i];
			
			//item.indent=indent;
			
			//arry.push(item);
            
            arry.push({data:item.data,label:item.label,indent:indent});
			
			
			if(item.children.length)
			{
				this.treeToTable(item.children,arry,indent+1,separate_totals);
				
				if(separate_totals)
				{
					arry.push({type:"total",data:item.data,label:"Total " + item.label,indent:indent});
				}
			}
			
		}
		return arry;
	}
	this.getChildLeafNodes=function(parentNode,result)
	{
		result=result?result:[];
		for(var i in parentNode.children)
		{
			var item=parentNode.children[i];
			if(!item.children.length)
			{
				result.push(item);
			}
			else
			{
				this.getChildLeafNodes(item,result);
			}
		}
		return result;
	}
	this.getLeafNodes=function()
	{
		var result=[];
		for(var i in this.treeHash)
		{
			var item=this.treeHash[i];
			if(!item.children.length)
			{
				result.push(item);
			}
		}
		return result;
	}
	this.addChild=function(parent,obj)
	{
		var parentArray=parent?parent.children:this.tree;
		var treeNode=this.makeTreeNode(obj);
		parentArray.push(treeNode);
		//this
	}
	this.selectNode=function(node)
	{
		var parent=this.treeHash[node.parentId];
		if(parent)
		{
			parent.expanded=true;
			this.selectNode(parent);
		}
	}
	this.selectNodeById=function(id)
	{
		var node=this.treeHash["item"+id];
		if(node)
		{
			this.selectNode(node);
		}
		return node;
	}
	this.makeTreeNode=function(obj)
	{
		var treeOptions=this.treeOptions;
		
		var treeNode={id:obj[treeOptions.idField],label:obj[treeOptions.label],parent_id:obj[treeOptions.parentId],parentId:"item"+obj[treeOptions.parentId],data:obj,children:[]};
		for(var f in treeOptions.includeFields)
		{
			var fld=treeOptions.includeFields[f];
			treeNode[fld]=obj[fld];
		}
		
		return treeNode;
		
	}
	this.treeOptions={idField:"id",parentId:"parent_id",label:"label",includeFields:[]}
	
	this.makeTree=function(objList,options,append)
	{
		var treeOptions=this.treeOptions;
		for(var i in options)
		{
			treeOptions[i]=options[i];
		}
		if(!append)
		{
			this.objHash={};
			this.treeHash={};
			this.tree=[];
		}
		var newTreeHash={};
		for(var i in objList)
		{
			var obj=objList[i];
			var treeNode=this.makeTreeNode(obj);
			/*var treeNode={id:obj[treeOptions.idField],label:obj[treeOptions.label],parentId:"item"+obj[treeOptions.parentId],data:obj,children:[]};
			
			for(var f in treeOptions.includeFields)
			{
				var fld=treeOptions.includeFields[f];
				treeNode[fld]=obj[fld];
			}*/
			
			this.treeHash["item"+treeNode.id]=treeNode;
			newTreeHash["item"+treeNode.id]=treeNode;
			this.objHash["item"+treeNode.id]=obj;
		}
		for(var i in newTreeHash)
		{
			var node=this.treeHash[i];
			var parent=this.treeHash[node.parentId];
			if(parent)
			{
				parent.children.push(node);
				//node.parent=parent;
			}
			else
			{
				this.tree.push(node);
			}
			//this.objHash["item"+obj[treeOptions.idField]]=obj;
		}
		this.calculateDepth();
		return newTreeHash;
		
	}
}
function NewTreeManager(options)
{
	TreeManager.prototype.addElements=function(list,id_fld,entity_name)
	{
		for(var i in list)
		{
			var item=list[i];
			this.objHash[entity_name+item[id_fld]]=item;
		}
		return this.objHash;
	}
	TreeManager.prototype.buildTree=function(options,list)
	{
		var treeOptions={children_field:"children",parentId:"parent_id",label:"label",includeFields:[]}
		var treeRoots=[];
		for(var i in options)
		{
			treeOptions[i]=options[i];
		}
		for(var i in list)
		{
			var item=list[i];
			item[treeOptions.children_field]=[];
		}
		for(var i in list)
		{
			var item=list[i];
			var parent=list[item[treeOptions.parentId]];
			if(parent)
			{
				parent[treeOptions.children_field].push(item);
			}
			else
			{
				treeRoots.push(item);
			}
		}
		return treeRoots;
		
	}
	return new TreeManager(options);
}