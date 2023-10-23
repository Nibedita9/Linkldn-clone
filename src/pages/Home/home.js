import React, { Component } from 'react';
import { Grid, Box, Link, Typography, Button, Divider, textfiled } from '@mui/material';
import "../Home/home.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Groups2Icon from '@mui/icons-material/Groups2';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import IconButton from '@mui/material/IconButton';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from '@mui/icons-material/Work';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import Postimg from "../image/Screenshot (2).png";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { ArrowDownward, ArrowDownwardSharp, ArrowDropDown, TextsmsTwoTone } from '@mui/icons-material';
import { Dialog } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';



export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {

      addpost: false,

      recentdata: [
        {
          recentda: "Bhubaneswar , Tech jobs",
        },
        {
          recentda: "Bhubaneswar , Tech jobs",
        },
        {
          recentda: "Bhubaneswar , Tech jobs",
        },
      ],

      linkldnNews: [
        {
          newsheadline: "India halts fresh visas for Canadian",
          topnews: "Top news",
          viewer: "1930",
        },
        {
          newsheadline: "India halts fresh visas for Canadian",
          topnews: "Top news",
          viewer: "1930",
        },
        {
          newsheadline: "India halts fresh visas for Canadian",
          topnews: "Top news",
          viewer: "1930",
        },
        {
          newsheadline: "India halts fresh visas for Canadian",
          topnews: "Top news",
          viewer: "1930",
        },
        {
          newsheadline: "India halts fresh visas for Canadian",
          topnews: "Top news",
          viewer: "1930",
        },
        {
          newsheadline: "India halts fresh visas for Canadian",
          topnews: "Top news",
          viewer: "1930",
        },
        {
          newsheadline: "India halts fresh visas for Canadian",
          topnews: "Top news",
          viewer: "1930",
        },
      ],
      articlePostData: [
        {
          wholikename: "Bill Gates",
          liketag: "likes this",
          peoplename: "Binu R R",
          profiletag: "Entreprenuer at Growth Foundation",
          posthour: "3h",
          article1: "React Js Interview Questions , you can easily placed any company",
          article2: "Like and Share with your friends and Help Them for Interview Preparation aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa cccccccccccc dddddddddd eeeeeeeeeeeeee ssssssssssssssssss",
          article3: "Something will be good happen",
          postImage: "",
          peoplelikepost: "arjun malik ",
          poeplelikecount: "1500 likes",
          commentcount: "249 comments",
          repostcount: "24 repost",

        },
        {
          wholikename: "Bill Gates",
          liketag: "likes this",
          peoplename: "Binu R R",
          profiletag: "Entreprenuer at Growth Foundation",
          posthour: "3h",
          article1: "React Js Interview Questions , you can easily placed any company",
          article2: "Like and Share with your friends and Help Them for Interview Preparation aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa cccccccccccc dddddddddd eeeeeeeeeeeeee ssssssssssssssssss",
          article3: "Something will be good happen",
          postImage: "",
          peoplelikepost: "arjun malik ",
          poeplelikecount: "1500 likes",
          commentcount: "249 comments",
          repostcount: "24 repost",

        }
      ]


    }
  }
  render() {
    return (
      <Grid style={{ backgroundColor: "#f5f7f9" }}>
        <Grid className='main-container'>
          <Grid container xs={12} gap={4}>
            {/* first card section here */}

            <Grid item xs={12} md={2.3} className='first-container'>


              {/* profile part  */}
              <Grid style={{ background: "#fff", borderRadius: "10px", }} >

                {/* profile image and details tag */}
                <Grid style={{ paddingBottom: "10px", background: "#FFF", borderRadius: "2px" }}>

                  <Box style={{ background: "linear-gradient(purple,gray)", borderRadius: "10px 10px 0px 0px", height: "7vh", width: "100%" }}>

                  </Box>

                  <Link to=" " style={{ textDecoration: "none" }}>
                    <Box style={{ textAlign: "center", gap: "10px" }}>

                      <Box style={{ background: "white" }} >
                        <AccountCircleIcon className='profile-image' />
                      </Box>

                      <Typography style={{ background: "white", fontWeight: "600", color: "black", fontSize: "13px" }}>Nibedita Rana</Typography>

                    </Box>


                  </Link>


                  <Box style={{ fontSize: "11px", background: "#fff", color: "gray", padding: "9px", textAlign: "center", paddingTop: "1%" }}>
                    Aspiring FRotgt developer | vhhjgdsjfgdhs | hjdhfjehjehfk | nbfhjhgjrrj | bfbgjhjhjbvmb | ndfjkghrjkgkjkre |nbfgbrjkghrjeh
                  </Box>


                </Grid>

                {/* views & impressions part */}
                <Grid style={{ background: "#fff", padding: "10px", borderTop: "1px solid lightgray" }}>
                  <Box style={{ display: "flex", justifyContent: "space-between", background: "#fff" }}>
                    <Typography style={{ fontSize: "11px", color: "gray" }}>Who view's your profle</Typography>
                    <Typography style={{ fontSize: "11px", color: "blue" }}>
                      90
                    </Typography>
                  </Box>

                  <Box style={{ display: "flex", justifyContent: "space-between", background: "#fff" }}>
                    <Typography style={{ fontSize: "11px", color: "gray" }}>impressions of your profile</Typography>
                    <Typography style={{ fontSize: "11px", color: "blue" }}>
                      1900
                    </Typography>
                  </Box>

                </Grid>

                {/* access exclusive  */}
                <Grid style={{ padding: "10px ", borderBottom: "1px solid lightgray", borderTop: "1px solid lightgray" }}>
                  <Typography style={{ fontSize: "11px", color: "gray" }}>Access Exclusive tools & insights</Typography>
                  <Grid style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Box style={{ height: "10px", width: "10px", background: "linear-gradient(yellow,orange)" }}></Box>
                    <Link><Typography style={{ fontSize: "12px", color: "black" }}>get hired faster , try premium free</Typography></Link>
                  </Grid>
                </Grid>

                {/* save items paart */}

                <Grid style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px" }}>

                  <BookmarkIcon />
                  <Typography style={{ fontSize: "12px" }}>My Items</Typography>
                </Grid>


              </Grid>

              {/* recent news part */}
              <Grid style={{ background: "#fff", borderRadius: "7px", marginTop: "5%", padding: "10px", border: "1px solid lightgray" }}>
                <Grid style={{ background: "#fff", }}>
                  <Typography style={{ fontSize: "12px", background: "#fff" }}>Recent</Typography>

                  {this.state.recentdata.map((item, index) => {
                    return (
                      <Grid style={{ background: "#fff", padding: "7px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "13px" }}>

                        <Groups2Icon style={{ background: "#fff", width: "18px", }} />
                        <Typography style={{ fontSize: "11px", background: "#fff" }}>{item.recentda}</Typography>
                      </Grid>
                    )
                  })}


                </Grid>

                {/* group part */}
                <Grid>
                  <Typography style={{ fontSize: "11px", color: "blue" }}>Group</Typography>
                  <Grid style={{ padding: "7px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "13px" }}>

                    <Groups2Icon style={{ background: "#fff", width: "18px", }} />
                    <Typography style={{ fontSize: "11px", background: "#fff" }}>Bhubaneswar , Tech Jobs</Typography>
                  </Grid>
                  {/* <Grid>
                  <Button>Read More</Button>
                </Grid> */}
                </Grid>

                {/* event tag */}

                <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography style={{ fontSize: "11px", color: "blue" }}>Events</Typography>
                  <AddIcon />
                </Grid>
                <Typography style={{ fontSize: "11px", color: "blue" }}>Followed Hashtag</Typography>
                <Grid style={{ textAlign: "center", padding: "15px 10px", borderTop: "1px solid lightgray" }}>
                  <Typography style={{ fontSize: "13px", color: "gray" }}>Discover More</Typography>
                </Grid>
              </Grid>



            </Grid>

            {/* second card section here */}

            <Grid item xs={12} md={6} className='second-container'>

              {/* post here code */}

              <Grid style={{ background: "white" }}>
                <Grid style={{ display: "flex", gap: "10px", alignItems: "center", padding: "10px" }}>
                  <AccountCircleIcon style={{ marginLeft: "10px", fontSize: "50px" }} />
                  <Box>
                    <Paper
                      className='search-bar'
                      component="form"
                      style={{ borderRadius: "50px", cursor: "pointer", outline: "gray", height: "20px", width: "400px", boxShadow: "none" }}
                      onClick={() => {
                        this.setState({ addpost: true });
                      }}

                    >

                      <InputBase
                        style={{ mt: "35" }}
                        placeholder="Start a Post"
                        inputProps={{ "aria-label": "Start a Post " }}
                      />
                    </Paper>
                  </Box>
                </Grid>

                <Grid style={{ display: "flex", justifyContent: "space-around", marginLeft: "20px", marginRight: "20px" }}>

                  <Box style={{ textAlign: "center" }}><PermMediaIcon style={{ color: "lightblue", }} /><Typography style={{ fontSize: "14px" }}>Media</Typography></Box>
                  <Box style={{ textAlign: "center" }}><WorkIcon style={{ color: "purple", }} /><Typography style={{ fontSize: "14px" }}>Jobs</Typography></Box>
                  <Box style={{ textAlign: "center" }}><SaveAsIcon style={{ color: "orange", }} /><Typography style={{ fontSize: "14px" }}>Article</Typography></Box>
                </Grid>
              </Grid>

              {/* top sort  */}
              <Grid style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px" }}>
                <Box style={{ border: "0.5px solid lightgray", width: "100%" }}></Box>
                <Typography style={{ fontSize: "10px", whiteSpace: "nowrap", color: "gray" }}>Sort By :</Typography>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography style={{ textAlign: "center", fontSize: "10px", color: "black", fontWeight: "500" }}>Top </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
              </Grid>

              {/* post article ,video, image part here */}


              {this.state.articlePostData.map((item, index) => {
                return (

                  <Grid style={{ marginTop: "2%", background: "white", padding: "13px", borderRadius: "7px" }}>

                    {/* when some one likes post code  */}
                    <Grid style={{ display: "flex", justifyContent: "space-between", paddingBottom: "7px" }}>
                      <Box style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                        <AccountCircleIcon />
                        <Typography style={{ fontSize: "11px" }}>{item.wholikename} <span style={{ color: "gray" }}>{item.liketag}</span></Typography>
                      </Box>

                      <Box style={{ display: "flex" }}>
                        <MoreHorizIcon />
                        <CloseIcon style={{ fontSize: "20px" }} />
                      </Box>
                    </Grid>

                    {/* details about people tag line, name , follow */}
                    <Grid>

                      {/* style={{}} */}
                      <Grid style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderTop: "1px solid lightgray" }} >
                        <Box style={{ display: "flex", gap: "9px" }}>
                          <AccountCircleIcon style={{ fontSize: "50px" }} />
                          <Box>
                            <Box style={{ display: "flex" }}><Typography style={{ fontSize: "11px" }}>{item.peoplename}</Typography><span style={{ fontSize: "10px", color: "gray" }}>.2nd</span></Box>
                            <Typography style={{ fontSize: "10px", color: "gray" }}>{item.profiletag}</Typography>
                            <Box style={{ display: "flex", alignItems: "center" }}><Typography style={{ fontSize: "11px", color: "gray" }}>{item.posthour}</Typography><span style={{ fontSize: "11px" }}>
                              .<PublicIcon style={
                                { fontSize: "12px" }
                              } /></span></Box>
                          </Box>
                        </Box>

                        <Box style={{ display: "flex", alignItems: "center" }}>
                          <AddIcon style={{ color: "blue" }} />
                          <Typography style={{ color: "blue", fontSize: "12px" }}>Follow</Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* article section and post section here  */}
                    <Grid>
                      {/* article write here */}
                      <Box>
                        <Typography style={{ fontSize: "15px", marginBottom: "7px" }}>{item.article1}                          any company</Typography><br />
                        <Typography style={{ fontSize: "14px " }}> {item.article2} </Typography>
                      </Box>
                      {/* img,video post here */}
                      <Box style={{ height: "400px", width: "100%", paddingTop: "10px" }}>
                        <img src={Postimg} className='image-size' />
                      </Box>
                    </Grid>

                    {/* likes,repost,send ,comment */}
                    <Grid>
                      {/* likes action here */}
                      <Grid style={{ display: "flex", justifyContent: 'space-between', borderBottom: "1px solid lightgray", padding: "10px" }}>
                        {/* emoji with names show here */}
                        <Grid style={{ display: "flex", gap: "1px", alignItems: "center" }}>
                          <FavoriteOutlinedIcon className="like-icon" />
                          <FavoriteOutlinedIcon className="like-icon" />
                          <FavoriteOutlinedIcon className="like-icon" />
                          <Box style={{ display: "flex" }}>
                            <Typography style={{ fontSize: "10px", color: "gray" }}>Arjun malik </Typography>
                            <Typography style={{ fontSize: "10px", color: "gray" }}> and 1500 likes</Typography>
                          </Box>
                        </Grid>

                        {/* comment and likes count here */}
                        <Grid style={{ display: "flex" }}>
                          <Typography style={{ fontSize: "10px", color: "gray" }}>245 comments </Typography>
                          <Typography style={{ fontSize: "10px", color: "gray" }}>. 24 repost</Typography>
                        </Grid>
                      </Grid>

                      {/* like , comment , send , repost here */}
                      <Grid style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                        <Box style={{ display: "flex", gap: "9px" }}>
                          <ThumbUpAltOutlinedIcon />
                          <Typography>Like</Typography>
                        </Box>
                        <Box style={{ display: "flex", gap: "9px" }}>
                          <TextsmsTwoTone />
                          <Typography>Comment</Typography>
                        </Box>
                        <Box style={{ display: "flex", gap: "9px" }}>
                          <RepeatOutlinedIcon />
                          <Typography>Repost</Typography>
                        </Box>
                        <Box style={{ display: "flex", gap: "9px" }}>
                          <SendOutlinedIcon />
                          <Typography>Send</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>


                )
              })}




            </Grid>

            {/* third card section here */}

            <Grid item xs={12} md={2.3} className='third-container'>

              <Grid>
                {/* linkdln news part  */}
                <Grid style={{ background: "white" }}>
                  <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                    <Typography style={{ fontSize: "12px" }}>Linkedln News </Typography>
                    <PriorityHighIcon style={{ height: "10px", width: "10px", background: "black", color: "white", boraderRadius: "2px" }} />
                  </Grid>

                  {this.state.linkldnNews.map((item, index) => {
                    return (
                      <Grid style={{ display: "flex", padding: "2px" }}>
                        <FiberManualRecordIcon style={{ height: "7px", marginTop: "5px" }} />
                        <Grid>
                          <Typography style={{ fontSize: "10px" }}>{item.newsheadline}</Typography>
                          <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <Typography style={{ fontSize: "10px", color: "gray" }}>{item.topnews}</Typography>
                            <span style={{ textAlign: "center", marginBottom: '10px' }}>.</span>
                            <Typography style={{ fontSize: "10px", color: "gray" }}>{item.viewer} readers</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    )
                  })}

                </Grid>

                {/* footer part here */}
                <Grid>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        {/* dialog boxs here */}

        <Dialog
          open={this.state.addpost}
          maxWidth="xl"
          aria-describedby="alert-dialog-description"
          style={{ width: "100%" }
          }
        >
          <Grid style={{ minWidth: "700px", height: "500px", padding: "20px" }}>
            <Grid style={{display:"flex",justifyContent:"space-between"}}>
            <Box style={{ display: "flex" }} >
              <AccountCircleIcon />
              <Box>
                <Typography style={{ fontSize: "16px" }}>Nibedita Rana</Typography>
                <Typography style={{ fontSize: "12px" }}>Post to anyone</Typography>
              </Box>
              <ArrowDropDown />
            </Box>
            <CloseIcon/>
            </Grid>
            <Box>
              <textfiled></textfiled>
            </Box>
            <Grid style={{bottom:"0%"}}>
              <SentimentSatisfiedAltIcon/>
            </Grid>
          </Grid>
        </Dialog>


      </Grid>
    )
  }
}
