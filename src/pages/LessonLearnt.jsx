import React from "react";
import CodeBlock from "/CodeBlock.png";
import { LuCopyright } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

const LessonLearnt = () => {
  return (
    <>
      <div className="px-5 md:px-[10%] py-10 flex flex-col gap-5 text-xl">
        <h1 className="font-bold text-3xl">#What I learned</h1>

        <p>
          🥵Whew, working on this project has been a tumultuous ride, to say the
          least. Way too many hours man, my eyes are peeled. But I had fun and
          loved every second of it, I guess this is what you call passion.
        </p>

        <p>
          What I loved most, however, were the challenges I encountered. Ironic,
          I know, but the syntaxes that have become a part of me were the ones I
          hovered on longer than usual trying to figure out just what was wrong
          this time. Also, I desperately needed the stretch as I had not written
          one line of code since February.
        </p>

        <p>
          Choosing this project, though, as a "get-back-to-it" project,
          especially as someone still taking intermediate React steps + off-code
          for so long, may have been audacious on my part. But the more
          roadblocks I hit, the more I gritted my teeth through it because we
          don't do give ups here.
        </p>

        <p>And many, [very many] hours later, I can finally say I am done!!</p>

        <p>
          So, as someone who scoured and swam through the internet to find
          solutions to the problems I encountered, I'm laying out everything
          working on this project taught me here, hoping it helps someone find
          the solutions they need, and also to lay on thick the syntax(es) I
          learned by writing them out by heart.
        </p>

        <p>
          <span className="font-bold">PS: </span>
          The below codes are tailored to a React + Vite + Tailwind CSS coding
          environment and are written out in no particular order, do keep an eye
          out for the title of each one:
        </p>

        <p className="font-bold text-xl">
          First off: Simple Tricks Unique to the E-commerce Product Page
          Challenge
        </p>

        <div className="flex flex-col gap-5 text-xl *:max-h-100 *:overflow-y-scroll">
          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              1. Change the fill of an svg that just won't change using the fill
              keyword{" "}
            </h2>
            <p className="text-red-400">
              {" "}
              <span className="font-bold">DO NOT: </span>
              render your svg file as an image in an &lt;img /&gt;. If you
              intend to change the fill of the svg, rendering as an image takes
              out the flexibility of playing around with it's attributes.
            </p>
            <div className="text-green-400">
              {" "}
              <span className="font-bold">DO: </span>
              Some ways to go about this are:
              <ul className="list-disc pl-8">
                <li>
                  Either create a copy of the svg file, open with a text editor
                  and update the color as needed
                </li>
                <li>Import the file as a component</li>
                <li>Use directly as an inline svg</li>
              </ul>
            </div>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              2. Make a button background have some opacity on hover while text
              remains clear{" "}
            </h2>
            <p className="text-red-400">
              <span className="font-bold">DO NOT: </span>
              assign an opacity value to the button on hover.
            </p>
            <p className="text-green-400">
              <span className="font-bold">DO: </span>
              Use instead the background-color{" "}
              <span className="font-bold">"[bg-color]" </span> attribute and{" "}
              <span className="font-bold">rgba() </span>or
              <span className="font-bold"> hsl() </span>color codes to reduce
              the intensity of the background color on hover.
            </p>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              3. Reduce the thumbnail images' opacity on hover, but display a
              clear border + opacity on image when active{" "}
            </h2>
            <p className="text-green-400">
              <span className="font-bold">DO: </span>
              Enclose the thumbnails individually in &lt;div&gt;&lt;/div&gt;
              tags, then assign border attributes to the div when active and
              reduced opacity on hover, and reduce also the opacity value of the
              images on hover. Such that:
            </p>
            <div className="w-full flex items-center justify-center bg-[#002451] rounded-[10px]">
              <img src={CodeBlock} alt="" />
            </div>
            <p className="text-green-400">
              The block of code in the above image assigns initial class
              attributes to the div, then assigns additional attributes if it is
              the active class:
              <p className="px-5 md:px-15">
                {" "}
                className = &#123;` class attibutes for the design of the
                element <br /> $&#123; conditional statement to consider <br />{" "}
                ? "class attributes if active" <br /> : "class attributes if not
                the active image in view"&#125; `&#125;
              </p>{" "}
            </p>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              4. Center items horizontally and vertically in a div
            </h2>
            <p className="text-green-400">
              <span className="font-bold">DO: </span>
              Assign width and height values to the parent div, then to the same
              parent div, give the <span className="font-bold">flex</span> class
              with the attributes: justify-center and items-center
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              &lt;div className="
              <span className="font-bold">
                w-full h-60 flex justify-center items-center bg-red-500
              </span>
              "&gt; <br />
              <p className="pl-3 md:pl-10">
                &lt;h1&gt; I am horizontally and vertically aligned &lt;/h1&gt;{" "}
              </p>
              &lt;/div&gt;
            </div>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              5. Make a modal span the height and width of the entire viewport
              or body of the project
            </h2>
            <p className="text-green-400">
              <span className="font-bold">DO: </span>
              Use the fixed position on the parent div of the modal element,
              this helps it break free from the containment of it's parent div.
              Also assign a high index value, so that it appears on top of
              everything else. <br />
              Optional: give an almost-transparent background to the parent div
              of the modal element to keep things clean.
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              &lt;div className="
              <span className="font-bold">
                fixed top-0 left-0 w-full min-h-screen bg-[hsla(0, 0%, 0%, 0.7)]
                flex justify-center items-center z-9999
              </span>
              "&gt; <br />
              <p className="pl-3 md:pl-10">
                &lt;h1 className="
                <span className="font-bold">
                  h-100 w-100 bg-red-100 flex justify-center items-center
                </span>
                "&gt; I am a horizontally and vertically aligned modal element
                &lt;/h1&gt;{" "}
              </p>
              &lt;/div&gt;
            </div>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              6. Keep an element's position constant no matter the screen size
            </h2>
            <p className="text-green-400">
              <span className="font-bold">DO: </span>
              Use the relative class on parent, and the absolute class on the
              element itself, then using the top, right, bottom, and left
              attributes, position as required.
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              &lt;div className="
              <span className="font-bold">relative</span>
              "&gt; <br />
              <p className="pl-3 md:pl-10">
                &lt;h1 className="
                <span className="font-bold">absolute -top-3 left-0</span>
                "&gt; ⚓ &lt;/h1&gt;{" "}
              </p>
              &lt;/div&gt;
            </div>
          </div>

          <p className="font-bold mt-10 text-xl">
            Up Next: Syntaxes and Functions
          </p>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              1. Syntax for writing a function
            </h2>
            <p className="text-green-400">
              function handleACertainClick() &#123;
              <p className="pl-3 md:pl-10">function to be carried out;</p>
              &#125;
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              function handleCountIncrease() &#123;
              <p className="pl-3 md:pl-10">setCount(count + 1);</p>
              &#125;
            </div>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              2. Syntax for writing a const function
            </h2>
            <p className="text-green-400">
              const handleACertainClick = () =&gt; &#123;
              <p className="pl-3 md:pl-10">function to be carried out;</p>
              &#125;
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              const handleCountDefault = () =&gt; &#123;
              <p className="pl-3 md:pl-10">setCount(0);</p>
              &#125;
            </div>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              3. Syntax for assigning a function to the onClick event of an
              element
            </h2>
            <p className="text-green-400">
              onClick=&#123;handleACertainClick&#125;
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              &lt;button onClick=&#123;handleCountIncrease&#125;&gt; Click Me!
              &lt;/button&gt;
            </div>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              4. Syntax for assigning two functions to the onClick event of the
              same element
            </h2>
            <p className="text-green-400">
              onClick = &#123; () =&gt; &#123;handleACertainClick();
              handleAnotherClick(); &#125;&#125;
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              &lt;button onClick =&gt; &#123;() = &#123;handleCountIncrease();
              handleCountDefault(); &#125;&#125;&gt;
              <p className="pl-5 md:pl-15">Click Me!</p> &lt;/button&gt;
            </div>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              5. Syntax for mapping into an array
            </h2>
            <p className="text-green-400">
              &#123;yourArray.map((uniqueItem) =&gt; (
              <p className="pl-3 md:pl-10">
                &lt;div key=&#123;uniqueItem.id&#125;&gt;
              </p>
              <p className="pl-7 md:pl-15">
                &lt;p&gt;&#123;uniqueItem.name&#125;&lt;/p&gt;
              </p>
              <p className="pl-3 md:pl-10">&lt;/div&gt;</p>
              ))&#125; <br /> <br />
              PS: id in uniqueItem.id in the above code is the identifier for
              each item in the array so it can be any identifier, such as
              uniqueItem.name, but it must be unique for each item. So the best
              shot is to assign id numbers to each array item, ensuring that no
              two items share the same number.
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              const arrayList = [&#123; id: "1", name: "Wisdom", role: "Frontend
              Developer" &#125;]; <br />
              <br />
              &#123;arrayList.map((arrayItem) =&gt; (
              <p className="pl-3 md:pl-10">
                &lt;div key=&#123;arrayItem.id&#125;&gt;
              </p>
              <p className="pl-7 md:pl-15">
                &lt;p&gt;&#123;arrayItem.name&#125;&lt;/p&gt;
              </p>
              <p className="pl-7 md:pl-15">
                &lt;p&gt;&#123;arrayItem.role&#125;&lt;/p&gt;
              </p>
              <p className="pl-3 md:pl-10">&lt;/div&gt;</p>
              ))&#125;
            </div>
          </div>

          <div className="w-full p-5 rounded-[10px] bg-VeryDarkBlue flex flex-col gap-5 items-start">
            <h2 className="font-medium text-grayishBlue">
              6. Syntax for mapping into a nested array
            </h2>
            <p className="text-green-400">
              &#123;yourArray.map((nestedArrayItem) =&gt; (
              <p className="pl-3 md:pl-10">
                &lt;div key=&#123;nestedArrayItem.id&#125;&gt;
              </p>
              <p className="pl-5 md:pl-15">
                &#123;nestedArrayItem.nestedArrayItemTitle.map((uniqueItem)
                =&gt; (
              </p>
              <p className="pl-7 md:pl-20">
                &lt;ul key=&#123;uniqueItem.id&#125;&gt;
              </p>
              <p className="pl-9 md:pl-25">
                &lt;li&gt;&#123;uniqueItem.name&#125;&lt;/li&gt;
              </p>
              <p className="pl-7 md:pl-20">&lt;/ul&gt;</p>
              <p className="pl-5 md:pl-15">))&#125;</p>
              <p className="pl-3 md:pl-10">&lt;/div&gt;</p>
              ))&#125;
            </p>
            <div className="pl-3 md:pl-5 text-blue-400">
              const arrayList = [ &#123;
              <p className="pl-3 md:pl-10">id: "1",</p>
              <p className="pl-3 md:pl-10">name: "Wisdom",</p>
              <p className="pl-3 md:pl-10">role: "Frontend Developer",</p>
              <p className="pl-3 md:pl-10">experiences: [&#123;</p>
              <p className="pl-5 md:pl-15">experienceId: 1,</p>
              <p className="pl-5 md:pl-15">
                professional1: "Website Designer [CMSs] - 2023-2025",
              </p>
              <p className="pl-5 md:pl-15">
                professional2: "Computer Studies Tutor - 2022-2023",
              </p>
              <p className="pl-5 md:pl-15">
                professional3: "Web Developer Intern - 2020-2021",
              </p>
              <p className="pl-5 md:pl-15">
                Volunteer: "NHGSFP Enumerator - 2022-2023",{" "}
              </p>
              <p className="pl-3 md:pl-10">&#125;, ],</p>
              &#125;, ];
              <br />
              <br />
              &#123; arrayList.map((arrayItem) =&gt; (
              <p className="pl-3 md:pl-10">
                &lt;div key=&#123;arrayItem.id&#125;&gt;
              </p>
              <p className="pl-5 md:pl-15">
                &lt;p&gt;&#123;arrayItem.name&#125;&lt;/p&gt;
              </p>
              <p className="pl-5 md:pl-15">
                &lt;p&gt;&#123;arrayItem.role&#125;&lt;/p&gt;
              </p>
              <p className="pl-5 md:pl-15">
                &#123;arrayItem.experiences.map((experience) =&gt; (
              </p>
              <p className="pl-7 md:pl-20">
                &lt; ul key=&#123;experience.experienceId&#125;&gt;
              </p>
              <p className="pl-9 md:pl-25">
                &lt;li&gt;&#123;experience.professional1&#125;&lt;/li&gt;
              </p>
              <p className="pl-9 md:pl-25">
                &lt;li&gt;&#123;experience.professional2&#125;&lt;/li&gt;
              </p>
              <p className="pl-9 md:pl-25">
                &lt;li&gt;&#123;experience.professional3&#125;&lt;/li&gt;
              </p>
              <p className="pl-9 md:pl-25">
                &lt;li&gt;&#123;experience.Volunteer&#125;&lt;/li&gt;
              </p>
              <p className="pl-7 md:pl-20">&lt;/ul&gt;</p>
              <p className="pl-5 md:pl-15">))&#125;</p>
              <p className="pl-3 md:pl-10">&lt;/div&gt;</p>
              ))&#125;
            </div>
          </div>

          {/* The last item in the block of Q&As list ends */}
        </div>
        {/* Div containing all blocks of Q&As with overflow-y-scroll ends */}

        <p>
          Thats it<span className="font-bold"> for now. </span>I will keep one
          adding all what I learned to this list, but I paused here so I could
          submit the challenge, please check back for more solutions if you
          found this article useful.
        </p>

        <div className="flex flex-col gap-5">
          <p className="font-bold"> Written by: </p>
          <p>Wisdom Ezeonyeche</p>
          <p>
            Frontend Developer whos passionate about building amzing, intuitive,
            and innovative solutions
          </p>
          <p>
            Interested in paid part-time roles where I can support Frontend
            production or manage dev communities while I continue to increase my
            learning and finally knock imposter syndrome out of the ring, and
            confidently position myself for full-fledged developer roles. If
            you're working on a project and need help meeting deadlines, I'm the
            extra hand you need, do get in touch.
          </p>
          <div className="flex gap-5 *:hover:text-darkGrayishBlue">
            <a href="#" title="Facebook">
              <FaFacebook />
            </a>
            <a href="#" title="Twitter">
              <FaXTwitter />
            </a>
            <a href="#" title="Instagram">
              <RiInstagramFill />
            </a>
            <a href="#" title="LinkedIn">
              <IoLogoLinkedin />
            </a>
            <a href="#" title="YouTube">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
      {/* The main parent container ends */}
    </>
  );
};

export default LessonLearnt;
