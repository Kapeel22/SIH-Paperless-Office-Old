import * as React from 'react'
import styled from 'styled-components'
import { FlowChart, LinkDefault} from '@mrblenny/react-flow-chart/src';
import * as actions from '@mrblenny/react-flow-chart/src/container/actions'
import {  Page, SidebarItem } from './WorkflowComponents';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { cloneDeep, mapValues } from 'lodash'
import useStyles from '../Style'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Outer = styled.div`
  padding: 10px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  width: 100%;
`


const Content = styled.div`
  display: flex;
  flex-direction: column;
 
  overflow-y: scroll;
  overflow-x: scroll;
`
const Message = styled.div`
  margin: 10px;
  padding: 10px;
  background: rgba(0,0,0,0.05);
  line-height: 1.4em;
`

const Sidebar = styled.div`
  width: 250px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`
const mapIdtoUser={
  'DIR01' : 'Pramod Padole',
  'HOD001' : 'Umesh Deshpande',
  'AP001' : 'Ravindra Keskar',
  'AP002' : 'Anil Mokhade',
  'AP003' : 'Manish Kurhekar',
  
}

const countries = [
  { name: 'Ravindra Keskar', id: 'AP001' },
  { name: 'Manish Kurhekar', id: 'AP003' },
  { name: 'Umesh Deshpande', id: 'HOD001' },
  { name: 'Anil Mokhade', id: 'AP002' },
  { name: 'Pramod Padole', id: 'DIR01'}
]


let approver;

function handleClickAddAprover(node){
  // console.log('approver',approver)
  if(node.properties.approvers.length>1){
    node.properties.approvers = node.properties.approvers + '-'+ approver
  }
  else{
    node.properties.approvers = approver
  }
  // console.log('The node is',node)

}

function handleDelete(item,node){
  

  let approvers = node.properties.approvers

  // console.log('The approvers original',approvers)

  
  let i=0
  let finish = 0
  let start
  let end
  while(i<approvers.length && finish === 0){
    let j = 0
    if(item[0] === approvers[i]){
      start = i
     
      while(j<item.length){
        if(item[j] === approvers[i])
        {
          j++
          i++
        }
        else{
          break;
        }
      }
    }
    if (j === item.length){
      end = i
      if(i === approvers.length){
        start = start - 1
      }
      finish = 1
    }
    i++
  }
  // console.log(start,end)
  let newapprovers = ''

  for(i=0;i<approvers.length;i++){
    if(i>= start && i<=end){

    }
    else{
      newapprovers = newapprovers + approvers[i]
    }
  }
  // console.log('The new approvers',newapprovers)
  node.properties.approvers = newapprovers

}

 


const NodeInnerCustom = ({ node, config }) => {


  const classes = useStyles();
  
  // console.log('the node',node)
  
  const renderApprovers = (node) =>{
    let approverList = node.properties.approvers.split('-')
    // console.log('the approvers are',node.properties.approvers)
    return approverList.map((item,index) => {return(<div> <p >{index +1} : {mapIdtoUser[item]}
    
    <Button   onClick = {() => handleDelete(item,node)}>X
      </Button></p> 
    
    </div>)})
  }
   

  if (node.type === 'output-only') {
    return (
      <Outer>
        <p>Use Node inner to customise the content of the node</p>
      </Outer>
    )
  } else {
    return (
      <Outer>
        <p>Add Approvers for this level</p>
        
        <p>APPROVERS :</p>
        {node.properties.approvers.length > 1 ? renderApprovers(node): null}
        <Autocomplete
            style={{ width: 200, height : 50 }}
            options={countries}
            classes={{
              option: classes.option,
            }}
           
            onChange = {(event,value) => {console.log('The value is',value); if(value!== null)approver = value.id}}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <React.Fragment>
                {/* <span style={{fontSize:10}}>{option.id, "  "}</span><br/> */}
                <span style={{fontSize:14}}>{option.name}</span>
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                label="Choose an Approver"
                variant="outlined"

                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
          <Button variant="contained" size="small" color="primary" onClick = {() => handleClickAddAprover(node)}>
            Add Approver
          </Button>
       
      </Outer>
    )
  }
}


class SelectedSidebar extends React.Component {
  state = cloneDeep(this.props.chartSimple)

  handleClick = (chart) =>{
    // console.log('The final workflow is',chart)
    this.props.save(chart);

  }
  render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func) =>
      (...args) => this.setState(func(...args))) 

    return (
      <div>
      <Page>
        <Content>
          <FlowChart
            initialValue={chart}
            chart={chart}
            callbacks={stateActions}
            config={{ smartRouting: true,
		showArrowHead: true }}
	    
            Components={{

            NodeInner: NodeInnerCustom,
          }}
          />
        </Content>
	
    
     {this.props.title.localeCompare("Custom FlowChart") == 0 || this.props.modify ?

       (<><Sidebar>
         <Message>
      
        Drag and drop these items onto the canvas.
      
      </Message>
      <SidebarItem
        type="Intermediate Nodes"
        ports={ {
          port1: {
            id: 'port1',
            type: 'input',
          },
          port2: {
            id: 'port2',
            type: 'output',
           
          },
        } }
        properties={ {
          approvers: '',
        }}
      />
      
      <Sidebar>
      <Message>
              
                Click on the Nodes or Link to Delete.
               
              </Message>
          { chart.selected.type
          ? <Message>
              <div>Type: {chart.selected.type}</div>
              <div>ID: {chart.selected.id}</div>
              <br/>
              {/*
                We can re-use the onDeleteKey action. This will delete whatever is selected.
                Otherwise, we have access to the state here so we can do whatever we want.
              */}
              <Button variant="contained" color="primary" onClick={() => stateActions.onDeleteKey({})}>Delete</Button>
            </Message>
          : (null) }
        </Sidebar>
    </Sidebar> 
        
      <br>
      </br>
      </>): <></>}

	</Page>
	
      {this.props.title.localeCompare("Custom FlowChart") == 0 || this.props.modify ?
	
      <Button variant="contained" color="primary" onClick = {() => this.handleClick(chart)}>
        Save Flow Chart
      </Button> : <Button variant="contained" color="primary" onClick = {() => this.handleClick(chart)}>
        Submit Flow Chart
      </Button>}
      
      </div>
    )
  }
}

export default SelectedSidebar;

