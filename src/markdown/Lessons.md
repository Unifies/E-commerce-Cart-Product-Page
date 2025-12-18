# What I learned

🥵Whew, working on this project has been a tumultuous ride, to say the least. A week and counting, man, my eyes are peeled. But I had fun and loved every second of it, I guess this is what you call passion.<br />

What I loved most, however, were the challenges I encountered. Ironic, I know, but the syntax that stuck most were the ones I hovered on longer than usual trying to figure out just what was wrong this time - maybe a typo - but rereading blocks of code to debug for errors sure made the syntaxes stick. Also, I desperately needed the stretch as I had not written one line of code since February.

Choosing this project, though, as a "get-back-to-it" project, especially as someone still taking React baby steps, may have been audacious on my part. But the more I hit a roadblock, the more I gritted my teeth through it because we don't do give ups here.

And many, [very many] hours later, I can finally say I am done!! So, as someone who scoured and swam through the internet to find solutions to the confusions I encountered, I'm laying them out here, hoping it helps someone cut through the hours it took me to find solutions, and also to lay on thick the syntax(es) I learned in this project by writing them out by heart.

These are written out in no particular order, do keep an eye out for the title of each one:

Tricks unique to the Cart Component Project

1. Change the fill of an svg that just won't change using the fill keyword
   Do not import your svg file as an <img /> if you intend to change the file, rendering as an image takes out the flexibility of playing around with it's attributes. So, either create a copy of the svg file and update the color as needed, import the file as a component, or use directly as an inline svg

2. Make a button background have some opacity on hover while text remains clear
   Use the background-color [bg-color] attribute and rgba() color code to reduce the intensity of the color on hover instead of assigning an opacity value to the button element

3. Make the thumbnail images have opacity without border on hover, but with clear border and opacity when active
   Enclose the thumbnails individually in a div, then assign border attributes to the div when active, and apply the opacity value directly to the images both on hover and when active

4. Center items horizontally and vertically in a div
   Assign width and height values to the parent div, then to the same parent div, give the flex class with the attributes: justify-center and items-center [Tailwind CSS Classes]

5. Make a modal span the height and width of the entire viewport or body of the project
   Use the fixed position on the modal, this helps it break free from the containment of it's parent div. className="fixed top-0 left-0 w-full h-full." Optional: give a transparent background to the parent div of the modal element to keep things clean.

6. Keep an element's position constant no matter the screen size
   Use the relative class on parent, and the absolute class on the element itself, then using top, right, bottom, and left, position as required

7. Display only a set number of items from an array list that has more items than needed
Use the Splice keyword with the id of the items needed:
{arrayList.slice(0,6).map((product) => (
<div></div> 
))}
The above code returns 6 items with the id(s) of 0 - 5

8. Map into a nested array
   First, map into the main arrayList, then map again into its nested arrayList
   Say you have an arrayList:

export const arrayList = [
{
id: 0,
name: "Wisdom",
role: "Frontend Developer",
experience: [{
experienceId: 1,
professional1: "Shopify Store Designer - 2023-2025",
professional2: "Computer Studies Tutor - 2022-2023",
professional3: "Web developer Intern - 2020-2021",
Volunteer: "NHGSFP Enumerator - 2022-2023",
},],
},];

To map into the experience array, you'll first need to map into the arrayList array, then into the experience array, such that:
{arrayList.map((candidate) => (

<div key={id} >
{candidate.experience.map((candidateExperience) => (
<div key={experienceId} >
<p>{candidateExperience.professional1}</p>
<p>{candidateExperience.professional2}</p>
<p>{candidateExperience.professional3}</p>
<p>{candidateExperience.volunteer}</p>
</div>
))}
</div>
))}

9. Access items in a nested array for use in functions - kind of like mapping into a nested array as above, but for use in functions where you can't use array.map
   Flatten the array - doing this helps you use the items of a nested array in your project:

First, declare the flattenData function outside the component - directly under the imports:

const flattenData = (nestedArray) => {
const flatArray = [];
nestedArray.forEach((id) => {
id.experience.forEach((candidateExperience) => {
flatArray.push(image);
});
});
return flatArray;
};

where id is the identifier in your array, and experience is the name of the nested array, so ensure that there are no typos
Then, within the component, assign the above function to the array list of choice:

const candidateExperiences = flattenData(arrayList)

Now, you can use the candidateExperiences to access the contents of the nested array in your project

10. Assign two functions to the onClick event of the same element
    onClick={() => {
    functionOne();
    functionTwo();
    }}

11. Toggle the display of an element, such as the menu onClick of another element such as the Menu Bars.
    Assign an id [eg: mobileMenu] to the parent container of the element you want to toggle it's display, then define a function [eg: toggleDisplay] to toggle the element's display:
    const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

        if (mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.remove("hidden");
        } else {
          mobileMenu.classList.add("hidden");
        }

    };

Then, to the element whose click handles the opening and closing of the toggled element, assign the above function to their onClick event:

<p onClick = {toggleMobileMenu}> X </p> and <p onClick = {toggleMobileMenu}> = </p>

Hopefully, without breaking any of Frontend Mentors rules on sharing codes to the challenges, these are resources that greatly helped shape this project. My two cents: take the time to study and understand what is going on for each lesson, understand the functions, syntaxes, and structure, then try to write the solution into your project on your own.

Modal:
Slider:
Lightbox:
Add To Cart Function:

This article will most likely be updated over time to include all help-pieces for this challenge and updates to replace current solutions with best practices,

See you in the next.

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

Also, for our seasoned professionals who happen to stumble upon this article and notice errors in the below code or know best practices, I would very much appreciate it if you could drop a comment and I would update accordingly

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              8. Access items in a nested array for use in functions - kind of
              like mapping into a nested array as above, but for use in
              functions where you can't use array.map
            </h2>
            <p className="text-green-400">
              Use the Splice keyword with the id of the items needed: <br />
              <br />
              &#123;yourArray.slice(0, 6).map((uniqueItem) =&gt; (
              <p className="pl-3 md:pl-10">
                &lt;div key=&#123;uniqueItem.name&#125;&gt;&lt;/div&gt;{" "}
              </p>
              ))&#125;
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              const arrayList = [&#123; id: "1", name: "Wisdom", role: "Frontend
              Developer" &#125;,
              <br />
              &#123; id: "2", name: "John", role: "Backend Developer" &#125;,
              <br />
              &#123; id: "3", name: "Brad", role: "Full Stack Developer" &#125;,
              <br />
              &#123; id: "4", name: "Kris", role: "Product Designer" &#125;,
              <br />
              &#123; id: "5", name: "Dave", role: "IT Engineer" &#125;, ];
              <br />
              <br />
              &#123;arrayList.slice(0, 3).map((arrayItem) =&gt; (
              <p className="pl-3 md:pl-10">
                &lt;div key=&#123;arrayItem.id&#125;&gt;
              </p>
              <p className="pl-7 md:pl-15">
                &lt;p&gt;&#123;arrayItem.name&#125;&lt;/p&gt;
              </p>
              <p className="pl-3 md:pl-10">&lt;/div&gt;</p>
              ))&#125;
            </div>
            <p className="text-green-400">
              The above code returns array items in{" "}
              <span className="font-bold">0th - 2nd</span> position [different
              from id] of the array, so the result would be Wisdom, John, and
              Brad.
            </p>
          </div>

          {arrayList.splice(0, 3).map((arrayItem) => (
            <div key={arrayItem.id}>
              <p>{arrayItem.name}</p>
            </div>
          ))}

const arrayList = [
{ id: "1", name: "Wisdom", role: "Web Developer" },
{ id: "2", name: "John", role: "Web Developer" },
{ id: "3", name: "Brad", role: "Web Developer" },
{ id: "4", name: "Kris", role: "Web Developer" },
{ id: "5", name: "Dave", role: "Web Developer" },
];
