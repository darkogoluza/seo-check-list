import Task from "../components/Task";

const HomePage = () => {
    return (
        <main>
            <img className="fixed w-full h-full -z-50" src="./assets/bg.png" alt="background"/>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-blue-100 py-12">SEO Check List</h1>

                <div className="space-y-2">
                    <Task title={"Page Title"}
                          body={
                              (
                                  <div className="space-y-4">
                                      <img className="rounded-xl" src="./assets/img1.png" alt="Example"/>
                                      <p>It must contain keywords we know what the user will search for.</p>
                                      <p>Example user types in "Landscape gardeners nottingham" in google and the
                                          perfect title would be a sentence that includes all three keywords. Of course
                                          not all users will always type in the same keywords but that is researching
                                          and understanding what is our target audience and what are they searching
                                          for.</p>
                                      <p>Good title example (keyword + qualifier)</p>

                                      <div>
                                          <p>Perfect length of the title is not measured in character but instead in
                                              pixels.</p>
                                          <p>Avg is 30-60 chars.</p>
                                          <p>Length checker => <a className="text-blue-500"
                                                                  href="https://mrs.digital/tools/meta-length-checker/"
                                                                  target="_blank">https://mrs.digital/tools/meta-length-checker/</a>
                                          </p>
                                          <p>Title must not be cut off!</p>
                                      </div>

                                      <p>More info => <a className="text-blue-500"
                                                         href="https://developers.google.com/search/docs/appearance/title-link"
                                                         target="_blank">https://developers.google.com/search/docs/appearance/title-link</a>
                                      </p>

                                  </div>
                              )
                          }
                    />
                    <Task title={"Meta description tag"}
                          body={
                              (
                                  <div className="space-y-4">
                                      <img className="rounded-xl" src="./assets/img2.png" alt="Example"/>
                                      <img className="rounded-xl" src="./assets/img3.png" alt="Example"/>
                                      <p>It must contain keywords we know what the user will search for. </p>
                                      <p>In the description we must describe with a paragraph what the website is about
                                          and also keeping in mind we need to incorporate keywords to the sentences as
                                          well. </p>

                                      <p>It also must grab the reader's attention and stand out from the rest of the
                                          competition. </p>
                                      <div>
                                          <p>Perfect length of the description is not measured in character but instead
                                              in
                                              pixels. </p>
                                          <p>Avg is 130-140 chars.</p>
                                      </div>
                                  </div>
                              )
                          }
                    />
                    <Task title={"Meta author tag"}/>
                    <Task title={"Meta viewport tag"}/>
                    <Task title={"Meta charset=\"UTF-8\""}/>
                    <Task title={"Meta og:title"}/>
                    <Task title={"Meta og:description"}/>
                    <Task title={"Meta og:image"}/>
                    <Task title={"Meta: og:url"}/>
                    <Task title={"Meta og:locale"}/>
                    <Task title={"Meta og:site_name"}/>
                    <Task title={"All images have \"alt\" attribute"}
                          body={
                              <p>Must be descriptive so that the blind people who are using screen readers can also
                                  understand what is on the image.</p>
                          }
                    />
                    <Task title={"Is website using headings correctly"}
                          body={
                              <p>Use all of the headings to display importance to the user</p>
                          }
                    />
                    <Task title={"Semantic html"}
                          body={
                              (
                                  <div className="space-y-4">
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"
                                         target="_blank">{"<article>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"
                                         target="_blank">{"<aside>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"
                                         target="_blank">{"<details>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption"
                                         target="_blank">{"<figcaption>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"
                                         target="_blank">{"<figure>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"
                                         target="_blank">{"<footer>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"
                                         target="_blank">{"<header>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main"
                                         target="_blank">{"<main>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark"
                                         target="_blank">{"<mark>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"
                                         target="_blank">{"<nav>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"
                                         target="_blank">{"<section>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary"
                                         target="_blank">{"<summary>"}</a>
                                      <a className="text-blue-500 block"
                                         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time"
                                         target="_blank">{"<time>"}</a>

                                      <p>
                                          More semantic elements you can find here =>
                                          <a className="text-blue-500 block"
                                             href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
                                             target="_blank">https://developer.mozilla.org/en-US/docs/Web/HTML/Element
                                          </a>
                                      </p>

                                      <p>
                                          Tutorial =>
                                          <a className="text-blue-500 block"
                                             href="https://www.youtube.com/watch?v=ZThq93Yuwd0"
                                             target="_blank">https://www.youtube.com/watch?v=ZThq93Yuwd0
                                              </a>

                                      </p>

                                      <img className="rounded-xl" src="./assets/img4.png" alt="Example"/>
                                  </div>
                              )
                              }
                              />
                              <Task title={"Correct url naming convection"}
                              body={
                              (
                              <div className="space-y-4">
                              <p>All lowercase.</p>
                              <p>Use dash instead of underscore</p>
                              <p>Contain what people will search for Example<br/>
                              /articles/3-url-best-practices<br/>
                              instead of<br/>
                              /articles/936329ba36a7</p>
                              <p>Change url whenever there is a change (keep them updated).</p>
                              <p>No special characters.</p>

                              </div>
                              )
                          }
                              />
                              <Task title={"Website loads faster then 2s"}/>
                              <Task title={"SSL certificate"}/>
                              <Task title={"Sitemap xml"}
                              body={
                              <p>It helps crawlers bots find all of the pages on your websites.</p>
                          }
                              />
                              <Task title={"robot.txt"}
                              body={
                              <p>It tells search engine crawlers which URLs the crawler can access on your site. This
                              is used mainly o avoid overloading your site with requests.</p>
                          }/>
                              <Task title={"Favicon."}/>
                              <Task title={"Custom 404 page"}/>
                              <Task title={"Minified js"}/>
                              <Task title={"Apparently no inline css"}/>
                              <Task title={"Index your page manually using google search console"}
                              body={
                              <p>
                              Tell google to SEO rank your website or some new update you made on your website
                              immediately.
                              </p>
                          }/>
                              </div>
                              </div>

                              <div className="max-w-3xl mx-auto">
                              <h1 className="text-3xl font-bold text-center text-blue-100 py-12">Schema Markup</h1>

                              <div className="space-y-2">
                              <Task title={"Organization"}/>
                              <Task title={"Website"}/>
                              <Task title={"Product"}/>
                              <Task title={"AggregateRating"}/>
                              <Task title={"BlogPosting"}/>
                              <Task title={"FAQPage"}/>
                              <Task title={"Validated"}/>
                              </div>
                              </div>

                              <div className="max-w-3xl mx-auto">
                              <h1 className="text-3xl font-bold text-center text-blue-100 py-12">Optional</h1>

                              <div className="space-y-2">
                              <Task title={"Meta og:video "}/>
                              <Task title={" Meta twitter:card"}/>
                              </div>
                              </div>

                              <div className="max-w-3xl mx-auto pb-12">
                              <h1 className="text-3xl font-bold text-center text-blue-100 py-12">Important</h1>

                              <div className="text-slate-100 space-y-4 bg-slate-900 p-8 rounded-xl">
                              <p>Free SEO analyzing tool => <a className="text-blue-500" href="https://seoanalyzer.me/"
                              target="_blank">https://seoanalyzer.me/</a></p>
                              <p>Free tool for validating open graph (social media friendliness) => <a className="text-blue-500"
                              href="https://www.opengraph.xyz/"
                              target="_blank">https://www.opengraph.xyz/</a>
                              </p>
                              <p>Use Google Search Console, it is a tool that helps with measuring your site's Search traffic and
                              performance, fix issues....</p>
                              <p>Validate/Preview Schema Markup => <a className="text-blue-500"
                              href="https://search.google.com/test/rich-results"
                              target="_blank">https://search.google.com/test/rich-results</a>
                              </p>
                              <p>Schema Markup documentation => <a className="text-blue-500"
                              href="https://schema.org/docs/schemas.html"
                              target="_blank">https://schema.org/docs/schemas.html</a></p>
                              <p>Schema Markup Generator => <a className="text-blue-500"
                              href="https://technicalseo.com/tools/schema-markup-generator/"
                              target="_blank">https://technicalseo.com/tools/schema-markup-generator/</a>
                              </p>
                              <p>Target SEO score is 80-100</p>
                              </div>

                              </div>
                              </main>
                              )
                          }

                          export default HomePage