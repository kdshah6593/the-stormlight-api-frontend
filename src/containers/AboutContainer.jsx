import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Header from '../components/Header'
import Footer from '../components/Footer';
import FlareIcon from '@material-ui/icons/Flare';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: '25%',
        marginTop: '2%',
        width: "50%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: '3%',
    },
    header: {
        fontSize: '50px',
        fontFamily: "'Cinzel Decorative', cursive",
        letterSpacing: "5px",
        margin: theme.spacing(2,0,2,0),
    },
    subHeader: {
        fontSize: '40px',
        fontFamily: "'Cinzel Decorative', cursive",
        letterSpacing: "5px",
        margin: theme.spacing(2,0,2,0),
    },
    techList: {
        display: 'flex',
        flexDirection: 'column',
    },
    techListItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
}));

const AboutContainer = () => {

    const classes = useStyles();

    return (
        <div>
            <Header/>
            <div className={classes.container}>
                <h1 className={classes.header}>About The Stormlight API</h1>
                <p>This API is a source for structured data from the Stormlight Archive universe. I give you access to data about all the Books, Characters, and more in an easy to use JSON format.</p>

                <h2 className={classes.subHeader}>Who am I?</h2>
                <p>I'm Kunal and I am a full stack web developer. My friend introduced to me to this series and I loved immersing myself in this world. Inspired by <Link href="https://anapioficeandfire.com/" target="_blank" rel="noopener" color="error">An API of Ice and Fire</Link>, the popular Game of Thrones API, I wanted to build this for other developers that enjoy the Stormlight Archive. If you have questions or thoughts on how to improve this API, please send me an email.</p>

                <h2 className={classes.subHeader}>Technologies</h2>
                <p>This API was built using various technologies.</p>
                <div className={classes.techList}>
                    <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p><strong>Ruby on Rails</strong> - The framework that the API/backend was built on.</p></div>
                    <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p><strong>PostgreSQL</strong> - The object-relational database system used to manage all the data.</p></div>
                    <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p><strong>React.js</strong> - JavaScript library used to build the frontend.</p></div>
                    <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p><strong>Material-UI</strong> - React UI Framework used to design the frontend.</p></div>
                    <div className={classes.techListItem}><ComputerIcon style={{marginRight: '10px'}}/><p><strong>Firebase</strong> - hosts the frontend page that are interacting with.</p></div>
                </div>

                <h2 className={classes.subHeader}>Can You Contribute?</h2>
                <p>Yes, I need the help! If you click here: Add/Edit, it will direct you to a form page to add new data or edit preexisting data.</p>
                <p>The world of Roshar is huge and constantly needs updating. If you add or edit data, I ask that you please contribute with relevant information. Currently, I am the only one managing it and I don't always have time to review that all the information is correct. Currently, since I am trying to grow the database, I am allowing anyone to add or edit the data without review. There may be developers that use this information for their own projects, so I ask that do not purposefully put false data in the database. I am in the process of creating the ability to sign up as a verified contributor to eliminate the possibility of incorrect data being added.</p>
                <p>If you want to help with the actual frontend or backend of the website, check out the Github documentation's contributing page for instructions.</p>

                <h2 className={classes.subHeader}>Copyright</h2>
                <p>
                    The Stormlight Archive series and its data is the property of <Link href="https://www.brandonsanderson.com/" target="_blank" rel="noopener" color="error">Brandon Sanderson</Link>. The data in this API is used without claim of ownership. All of the data has been collected from open free sources such as <Link href="https://stormlightarchive.fandom.com/wiki/Stormlight_Archive_Wiki" target="_blank" rel="noopener" color="error">Stormlight Archive Wiki</Link> and <Link href="https://coppermind.net/wiki/The_Stormlight_Archive" target="_blank" rel="noopener" color="error">The Coppermind</Link>.
                </p>
                <p>This project uses a MIT license.</p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutContainer;