import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MaterialTable from "material-table";
import Typography from "@material-ui/core/Typography";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Divider from "@material-ui/core/Divider";
// import useStyles from "../Style";
import DoubleArrowTwoToneIcon from "@material-ui/icons/DoubleArrowTwoTone";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import CreateIcon from "@material-ui/icons/Create";
import style from "../StyleSheet";
import ApprovalsHeader from "../Headers/ApprovalsHeader";

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} />
	)),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} />
	)),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

// const useTableStyles = makeStyles((theme) => ({
// 	// root: {
// 	// 	width: "100%",
// 	// 	paddingLeft: "20px",
// 	// 	paddingRight: "10px",
// 	// 	paddingTop: "20px",
// 	// },
// }));



// const json ={

//   listitems : [{id:1, subject:'Need Plancks constant',
//             nameofSender: 'Dustin Henderson', status: 'never ending story'},
//             {id:2, subject:'Escape from Mind Flayer',
//             nameofSender: 'Will Byers', status: 'Approved by Chief PD'},
//             {id:3, subject:'Want eleven to stop',
//             nameofSender: 'Mike Wheeler', status: 'Threatened by the party'}]
// }

//const tableData = [
// { id: '1', wname: 'Need Plancks Constant', sender: 'Dustin Henderson', feedback: 'Approved', time: 10},
// { id: '2', wname: 'Escape from Mind Flayer', sender: 'Will Byers', feedback: 'Approved', time: 33},
//{ id: '3', wname: 'Want Eleven To Stop', sender: 'Mike Wheeler', feedback: 'Rejected', time: 2},
//]
export default function AlignItemsList({ Click, requestTable, filter, node }) {
	// const tableclasses = useTableStyles();
	// const classes = useStyles();
	const classes = makeStyles(style(useTheme()))();

	const tableColumns = [
	{ title: "Workflow ID", field: "id" },
	{ title: "Workflow Name", field: "wname" },
	{ title: "Sender Name", field: "sender" },
	{ title: "Request Feedback", field: "feedback",defaultFilter : filter },
	{ title: "Last Updated On", field: "time" },
	{ title: "Priority", field: "priority" } // add type: 'numeric' if required
];




	// const renderListItem = (obj) =>{
	//   return(obj.map(item =>{
	//     return(
	//     <div key={item.id}>
	//     <ListItem alignItems="flex-start">
	//       <ListItemAvatar>
	//         <Avatar alt={item.nameofSender} src="/static/images/avatar/1.jpg" />
	//       </ListItemAvatar>
	//       <ListItemText
	//         primary={ item.subject }
	//         secondary={
	//           <React.Fragment>
	//             <Typography
	//               component="span"
	//               variant="body2"
	//               className={classes.inline}
	//               color="textPrimary"
	//             >
	//               {item.nameofSender}
	//             </Typography><br/>
	//             {item.status}
	//              On: {item.ts}
	//           </React.Fragment>
	//         }
	//       />
	//       <IconButton color="primary" onClick={()=>Click(item)}>
	//       <DoubleArrowTwoToneIcon style={{ fontSize: 40 }} />
	//       </IconButton>
	//     </ListItem>
	//     <Divider variant="inset" component="li" />
	//   </div>
	//   )}))
	// }

	

        if(!node){
        let tableTitle = "My Approvals "
	if(filter){
		tableTitle = tableTitle.concat(filter)
	}

	return (
		<React.Fragment>
		<ApprovalsHeader title="Approve Documents"/>
		<div className={classes.tableStyle}>
			<MaterialTable
				icons={tableIcons}
				title={tableTitle}
				columns={tableColumns}
				data={requestTable}
				actions={[
					{
						icon: "view",
						tooltip: "Approve Document",
						onClick: (event, rowData) => {
							Click(rowData.item);
						},
					},
				]}
				components={{
					Action: (props) => (
						<IconButton
							onClick={(event) => props.action.onClick(event, props.data)}
							color="primary"
							variant="contained"
							style={{ textTransform: "none" }}
							size="small">
							<CreateIcon />
						</IconButton>
					),
				}}
				options={{
					search: true,
					sorting: true,
					actionsColumnIndex: -1,
					headerStyle: {
						backgroundColor: "#002a29",
						color: "#FFF",
						fontWeight: "bold",
						fontSize: "15px",
					},
					rowStyle: {
						fontSize: "14px",
					},
				}}
			/>
		</div>
		</React.Fragment>

				// <List className={classes.root}>

		//   {renderListItem(json['requests'])}

		// 					Click(rowData.id);
		// 				},
		// 			},
		// 		]}
		// 		components={{
		// 			Action: (props) => (
		// 				<IconButton
		// 					onClick={(event) => props.action.onClick(event, props.data)}
		// 					color="primary"
		// 					variant="contained"
		// 					style={{ textTransform: "none" }}
		// 					size="small">
		// 					<VerifiedUserIcon />
		// 				</IconButton>
		// 			),
		// 		}}
		// 		options={{
		// 			search: true,
		// 			sorting: true,
		// 			actionsColumnIndex: -1,
		// 			headerStyle: {
		// 				backgroundColor: "#4E9C81",
		// 				color: "#FFF",
		// 				fontWeight: "bold",
		// 				fontSize: "15px",
		// 			},
		// 			rowStyle: {
		// 				backgroundColor: "#FBFBFB",
		// 				color: "#000",
		// 				fontSize: "14px",
		// 			},
		// 		}}
		// 	/>
		// </div>
		// <List className={classes.root}>{renderListItem(json["requests"])}</List>
	);




	}

		else{
		
		     let tableTitle = node.name
			
				tableTitle = tableTitle.concat("\'s  Approvals")
			

			return(<React.Fragment>
			<br/>
			<br/>
			<br/>
		<div className={classes.tableStyle}>
			<MaterialTable
				icons={tableIcons}
				title={tableTitle}
				columns={tableColumns}
				data={requestTable}
				actions={[
					{
						icon: "view",
						tooltip: "Approve Document",
						onClick: (event, rowData) => {
							Click(rowData.item);
						},
					},
				]}
				components={{
					Action: (props) => (
						<IconButton
							onClick={(event) => props.action.onClick(event, props.data)}
							color="primary"
							variant="contained"
							style={{ textTransform: "none" }}
							size="small">
							<VisibilityIcon />
						</IconButton>
					),
				}}
				options={{
					search: true,
					sorting: true,
					actionsColumnIndex: -1,
					headerStyle: {
						backgroundColor: "#002a29",
						color: "#FFF",
						fontWeight: "bold",
						fontSize: "15px",
					},
					rowStyle: {
						fontSize: "14px",
					},
				}}
			/>
		</div>
		</React.Fragment>
)

		}

}
