import { Hidden } from "@material-ui/core";

const drawerWidth = 300;
const style = theme => ({
    root: {
        display: "flex",
        "& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: theme.palette.grey[500],
			},
			"&:hover fieldset": {
				borderColor: theme.palette.secondary.dark,
				borderWidth: 2,
			},
		},
    },
    drawer: {
        height: "100vh",
        [theme.breakpoints.up("md")]: {
            flexShrink: 0,
            whiteSpace: "nowrap",
        }
    },
    drawerClose: {
        overflowX: "hidden",
        width: theme.spacing(8),
        height: "100vh",
        backgroundColor: theme.palette.background.navBarListBg,
        color: theme.palette.getContrastText(theme.palette.background.navBarListBg),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.common.white,
        color: theme.palette.getContrastText(theme.palette.common.white)
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    // necessary for content to be below app bar
    appBarSpacer: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(1)
    },
    title: {
        flexGrow: 1,
    },
    subtitle: {
		flexGrow: 1,
		color: theme.palette.primary.light,
		fontWeight: "bold",
		textTransform: "capitalize",
	},
    toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 6px",
        ...theme.mixins.toolbar,
        backgroundColor: theme.palette.primary.main,
	},
    navBarProfile: {
        height: 200,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    navBarLists: {
        backgroundColor: theme.palette.background.navBarListBg,
        color: theme.palette.getContrastText(theme.palette.background.navBarListBg),
        overflowX: "hidden",
        overflowY: "auto",
    },
    navBarListItems: {
        "& .Mui-selected": {
            borderRadius: "1px 50px 50px 1px", 
        },
        "& .MuiListItem-root:not(.Mui-selected):hover": {
            borderRadius: "1px 50px 50px 1px",
            backgroundColor: "#182f37",
        },
    },
    navBarDivider: {
        backgroundColor: theme.palette.getContrastText(theme.palette.background.navBarListBg),
    },
    navBarIcons: {
        color: theme.palette.getContrastText(theme.palette.background.navBarListBg)
    },
    navBarProfileLogo: {
        marginTop: theme.spacing(2),
        width: theme.spacing(12),
        height: theme.spacing(12),
        padding: theme.spacing(1),
        backgroundColor: "#0e1c21",
        borderRadius: "50%",
    },
    headerBox: {
        width: '100%',
        height: '110px', 
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    headerTitle: {
        marginLeft: theme.spacing(2),
        // align: "flex-end",
        flexShrink: 1,
        textTransform: "capitalize",
    },
    headerSearchBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    sideMenuButton: {
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up("lg")]: {
            display: 'none'
        }
    },
    sideDrawer: {
        zIndex: theme.zIndex.appBar - 5,
        width: drawerWidth,
        flexShrink: 0,
    },
    sideDrawerPaper: {
        zIndex: theme.zIndex.appBar - 5,
        width: drawerWidth,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("lg")]: {
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        }
    },
    sideDrawerContainer: {
        padding: theme.spacing(2),
    },
    landingPageMainContent: {
        padding: theme.spacing(2),
        // overflow: "auto",
        [theme.breakpoints.up("lg")]: {
            width: `calc(100% - ${drawerWidth}px)`,
        }
    },
    gridCard: {
		margin: 'auto',
		width: "100%",
		height: "100%",
    },
    media: {
		height: 100,
    },
    closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
    },
    tableStyle: {
		width: "100%",
		padding: theme.spacing(2),
		margin: "auto",
    },
	numCardContent: {
		textTransform: "capitalize",
		margin: 'auto',
    },
    utilCard: {
        width: "100%",
        maxHeight: "300px",
        [theme.breakpoints.up("sm")]: {
            height: "300px",
        }
    }
 });

export default style;