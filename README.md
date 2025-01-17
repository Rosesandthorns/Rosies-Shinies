Uh Hai
This website layout can be easily adjusted to your shiny showcase needs if you ever needed to
if you want to change the layout just follow the following steps

If you have **any** issues or concerns, feel free to contact me, you'll have the best chance of contacting me on Discord at _@Roses_and_Thornz_
# To change website name
Step 1 - Open the HTML file
Step 2 - Locate line 6 and 11
Step 3 - Adjust the lines to fit the following texts, 
**Line 6:** 
 <title>[InsertTitleHere]</title>   
 
**Line 11:**
    <h1 style="text-align: center; margin-top: 20px;">[YourTitleHere]</h1>

    Replace [YourTitleHere] with your title


# To Add Your Pokemon
Adding your pokemon is tedious, but simple, 
Just follow the following formula for each one
    {
        nickname: "[Nickname]",
        species: "#[NatdexNumber] - [Species]",
        description: "[Discription]",
        imageUrl: "[URLofImage]",
        tags: ["[Tags]", "[Tags]", "[Tags]", "[Tags]"]
    },
all you need to do is fill in the javasccript file with this, in the object section which starts at line 25.

# To change the tag colours and/or add tags
To change or add tags, open the CSS file, it should be called _styles.css_. this file at the very bottom holds tags and colours for each tag, 
simply follow the following format to adjust it
.tag.[InputTag] { background-color: [HexCode]; color: [TextColour]; }
For example:
.tag.fossil { background-color: #452d1c; color: white; }

# To Change background colour
This one is self explanitory, 
Open styles.css
Locate line 6
Change the hex code to the colour you wish for
