import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
  Toolbar,
  Typography,
  Slide,
  Button,
  useScrollTrigger,
  useMediaQuery,
} from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  NotesOutlined as TodoIcon,
  InfoOutlined as AboutIconOutlined,
  Info as AboutIcon,
  Menu as MenuIcon,
  ArrowBack as BackIcon,
  SettingsOutlined as SettingsIconOutlined,
  Settings as SettingsIcon,
} from "@material-ui/icons";
import { Link, useLocation } from "wouter";
import clsx from "clsx";
import { useState } from "react";
import CustomLink from "./CustomLink";
import MoreMenu from "./Actions/MoreMenu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const matches = useMediaQuery("(max-width: 768px)");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ paddingRight: matches ? 8 : 10 }}>
            {matches ? (
              location === "/" ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                  centerRipple={false}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Link href="/">
                  <IconButton
                    color="inherit"
                    aria-label="back"
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                    centerRipple={false}
                  >
                    <BackIcon />
                  </IconButton>
                </Link>
              )
            ) : (
              ""
            )}
            {!open && (
              <>
                {matches ? (
                  <Typography
                    variant="h6"
                    noWrap
                    style={{ flexGrow: 1, cursor: "pointer" }}
                  >
                    {location === "/"
                      ? "MAX TODOS"
                      : location.toUpperCase().replace("/", "")}
                  </Typography>
                ) : (
                  <Link href="/">
                    <Typography
                      variant="h6"
                      noWrap
                      style={{ flexGrow: 1, cursor: "pointer" }}
                    >
                      MAX TODOS
                    </Typography>
                  </Link>
                )}

                {!matches && (
                  <>
                    {["Settings", "About"].map((name, i) => (
                      <CustomLink href={`/${name.toLowerCase()}`} key={name}>
                        <Button
                          startIcon={
                            name === "Settings" ? (
                              location === "/settings" ? (
                                <SettingsIcon />
                              ) : (
                                <SettingsIconOutlined />
                              )
                            ) : location === "/about" ? (
                              <AboutIcon />
                            ) : (
                              <AboutIconOutlined />
                            )
                          }
                          style={{ color: "white", margin: 5 }}
                        >
                          {name}
                        </Button>
                      </CustomLink>
                    ))}
                  </>
                )}
                {location === "/" && <MoreMenu />}
              </>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} centerRipple={false}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Todos", "Settings", "About"].map((text, index) => (
            <CustomLink
              key={text}
              onClick={handleDrawerClose}
              href={index === 0 ? "/" : `/${text.toLowerCase()}`}
            >
              <ListItem button>
                <ListItemIcon>
                  {index === 0 ? (
                    <TodoIcon />
                  ) : index === 1 ? (
                    <SettingsIconOutlined />
                  ) : (
                    <AboutIconOutlined />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </CustomLink>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
