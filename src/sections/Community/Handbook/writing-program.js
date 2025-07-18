import React, { useState } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { Link } from "gatsby";
import { HandbookWrapper } from "./Handbook.style";
import Button from "../../../reusecore/Button";
import Modal from "react-modal";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";
import ContentForm from "./writing-program/content-form";

import blog from "./images/blogs.svg";
import event from "./images/event.svg";
import talks from "./images/talks.svg";
import videos from "./images/videos.svg";
import workshop from "./images/workshop.svg";
import resources from "./images/resources.svg";

const Writers = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Write with Layer5!</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content writing_program">
            <h2 className="heading-top">What is Layer5 Writing Program?</h2>
            <p>
              The Layer5 Writing Program is a way to demonstrate your expertise,
              give back to the community, and help us produce great content. We
              collaborate with authors and technologists from around the world
              to produce high quality articles, blog posts, tutorials and other
              cloud native resources on Meshery, Kubernetes, CNCF, Docker and
              related technologies.
            </p>
            <h2>Why should you participate?</h2>
            <div className="list">
              <Row>
                <Col $lg={6} $md={6} $sm={12}>
                  <div className="listed">
                    <table className="table">
                      <tr>
                        <td className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="40"
                            fill="none"
                            viewBox="0 0 40 40"
                          >
                            <rect
                              width="40"
                              height="40"
                              fill="#C9FCF6"
                              rx="5"
                            />
                            <path
                              stroke="#00B39F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M28 14L17 25L12 20"
                            />
                          </svg>
                        </td>
                        <td className="skill">
                          <h4>
                            Improve your writing and <br />
                            communication skills
                          </h4>
                          Publishing is a feedback-driven process that can help
                          you understand your audience better, explain complex
                          topics clearly, and iterate to improve results. Become
                          a better technical writer by collaborating with an
                          accomplished team of technical writers and editors.
                        </td>
                      </tr>
                      <tr>
                        <td className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="40"
                            fill="none"
                            viewBox="0 0 40 40"
                          >
                            <rect
                              width="40"
                              height="40"
                              fill="#C9FCF6"
                              rx="5"
                            />
                            <path
                              stroke="#00B39F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M28 14L17 25L12 20"
                            />
                          </svg>
                        </td>
                        <td className="skill">
                          <h4>Build your technical profile</h4>
                          Share your knowledge with a worldwide developer
                          community. Build your GitHub profile with assigned
                          issues and merged pull requests. Articles, posts,
                          project documentation written by you will be drafted,
                          put into a pull request, reviewed and merged like any
                          other code-centric contribution. Documenting the
                          problems you solved or a new feature you implemented
                          will serve as a perpetual guide to others in the
                          community.
                        </td>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col $lg={6} $md={6} $sm={12}>
                  <div className="listed">
                    <table className="table">
                      <tr>
                        <td className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="40"
                            fill="none"
                            viewBox="0 0 40 40"
                          >
                            <rect
                              width="40"
                              height="40"
                              fill="#C9FCF6"
                              rx="5"
                            />
                            <path
                              stroke="#00B39F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M28 14L17 25L12 20"
                            />
                          </svg>
                        </td>
                        <td className="skill">
                          <h4>Establish your voice and personal brand</h4>
                          Sharing your knowledge not only demonstrates your
                          technical expertise, it highlights your ability to
                          teach others, and establishes you as an authority on
                          the topic. Your technical write-ups are empirical
                          evidence of your ability to learn and teach.
                        </td>
                      </tr>
                      <tr>
                        <td className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="40"
                            fill="none"
                            viewBox="0 0 40 40"
                          >
                            <rect
                              width="40"
                              height="40"
                              fill="#C9FCF6"
                              rx="5"
                            />
                            <path
                              stroke="#00B39F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M28 14L17 25L12 20"
                            />
                          </svg>
                        </td>
                        <td className="skill">
                          <h4>Educate</h4>
                          Whether you're writing about a complex system or a a
                          set of actions you took to address an error, the odds
                          are high that someone else will someday struggle with
                          the same things as you. By writing about the things
                          that you learn or find interesting, you aren't just
                          teaching yourself, you're also helping share your
                          knowledge with every person who reads your post.
                        </td>
                      </tr>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>

            <h2>Where can you contribute?</h2>

            <p>
              We welcome the contribution of any type that shares knowledge
              about our projects or related technologies.
              <br />
              Do you want to document your recent effort in implementing a new
              feature? Do you want to share a solution for a problem you were
              struggling with? Do you want to share information about a recent
              technology you find intriguing? Want to host an event with Layer5?
              Want to deliver a talk, a workshop, or a tutorial? Just let us
              know.
            </p>

            <Row>
              <div className="content_list">
                <Col $sm={12} $md={6} $lg={4}>
                  <Link className="project-card" to="/blog">
                    <div className="content_type">
                      <img src={blog} alt="Blog" />
                      <h5>Blog</h5>
                      <p>Share Your Experience</p>
                    </div>
                  </Link>
                </Col>
                <Col $sm={12} $md={6} $lg={4}>
                  <Link className="project-card" to="/resources">
                    <div className="content_type">
                      <img src={resources} alt="Resource" />
                      <h5>Resource</h5>
                      <p>Articles, Tutorials, Podcasts and More</p>
                    </div>
                  </Link>
                </Col>
                <Col $sm={12} $md={6} $lg={4}>
                  <Link
                    className="project-card"
                    to="/learn/workshops"
                  >
                    <div className="content_type">
                      <img src={workshop} alt="Workshop" />
                      <h5>Workshop</h5>
                      <p>Deliver a Hands-on Learning Experience</p>
                    </div>
                  </Link>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="content_list">
                <Col $sm={12} $md={6} $lg={4}>
                  <Link className="project-card" to="/community/events">
                    <div className="content_type">
                      <img src={event} alt="Event" />
                      <h5>Event</h5>
                      <p>Organize an Event</p>
                    </div>
                  </Link>
                </Col>
                <Col $sm={12} $md={6} $lg={4}>
                  <Link className="project-card" to="/community/events">
                    <div className="content_type">
                      <img src={talks} alt="Talks" />
                      <h5>Talks</h5>
                      <p>Talk About Anything Cloud Native</p>
                    </div>
                  </Link>
                </Col>
                <Col $sm={12} $md={6} $lg={4}>
                  <Link
                    className="project-card"
                    to="/cloud-native-management/meshery"
                  >
                    <div className="content_type">
                      <img src={videos} alt="Videos" />
                      <h5>Recorded Videos</h5>
                      <p>Product Videos, Reviews or Demo</p>
                    </div>
                  </Link>
                </Col>
              </div>
            </Row>

            <h2>What is the process?</h2>

            <div className="process">
              <div className="item">
                <p>
                  If you’re interested in the Layer5 Writing Program, please
                  submit your information (and proposed topic, if you have one)
                  to get started.{" "}
                  <i>
                    Don't have a topic? Don't worry, we have plenty of
                    suggestions for you.
                  </i>
                </p>

                <Button
                  $primary
                  className="open-modal-btn"
                  onClick={openModal}
                  title="Layer5 Content Form"
                />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  className="Modal"
                  overlayClassName="Overlay"
                  ariaHideApp={false}
                  contentLabel="Content Form"
                >
                  <Button
                    $secondary
                    className="close-modal-btn"
                    onClick={closeModal}
                  >
                    {" "}
                    <GrFormClose />
                  </Button>
                  <h2 className="modal-heading">
                    Layer5 Content Registration Form
                  </h2>
                  <div className="content-form">
                    <ContentForm />
                  </div>
                </Modal>
              </div>
              <div className="item">
                <p>
                  Upon being accepted, you'll work with a coordinator on the
                  content team to decide on a topic, develop a project plan, and
                  discuss submission details.
                </p>
              </div>
            </div>

            <br></br>
            <h2>What are some suggested topics?</h2>
            <p>
              Here are some suggested topics to get you started. If you have an
              idea that isn't listed here or if you have any question, please
              let us know on our{" "}
              <a href="https://discuss.layer5.io/">Discuss Forum</a> /{" "}
              <a href="https://layer5io.slack.com/">Slack Channel</a>.
            </p>
            <ul>
              <li>
                <p>
                  <strong>DevOps/Observability/Kubernetes:</strong>
                </p>
                <ul>
                  <li>
                    <p>
                      Distributed Tracing in Context of Meshery's Architecture.
                    </p>
                  </li>
                  <li>
                    <p>One-stop Cloud Native Market Place - Meshery Catalog.</p>
                  </li>
                  <li>
                    <p>Interpreting your Cloud Native Performance - SMP.</p>
                  </li>
                  <li>
                    <p>
                      Creating and Deploying your first application with
                      Kanvas.
                    </p>
                  </li>
                  <li>
                    <p>Load generation and Load balancing.</p>
                  </li>
                  <li>
                    <p>DevOps and Platform Engineering.</p>
                  </li>
                  <li>
                    <p>Beginners guide to Meshmodel.</p>
                  </li>
                  <li>
                    <p>
                      Enhancing Microservices Observability with Meshery and
                      Prometheus.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Community:</strong>
                </p>
                <ul>
                  <li>
                    <p>
                      Building Bridges, Not Walls: The Power of Open Source
                      Collaboration.
                    </p>
                  </li>
                  <li>
                    <p>
                      A Deep Dive into Meshery's Contribution to Cloud Native
                      Ecosystem.
                    </p>
                  </li>
                  <li>
                    <p>
                      Open Source Sustainability: Funding Models for Long-Term
                      GitHub Projects.
                    </p>
                  </li>
                  <li>
                    <p>Importance to an open source community.</p>
                  </li>
                  <li>
                    <p>
                      Beyond Code: The Unsung Heroes of Open Source -
                      Documenters, Testers, and Designers.
                    </p>
                  </li>
                  <li>
                    <p>
                      Open Source Alchemy: Transforming Community Contributions
                      into Gold.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborative Open Source Development: Inside the
                      Community of Layer5.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>

            <br></br>
            <h2>How to Submit and Review Your Writing?</h2>
            <p>
              The Writing Program offers writers two convenient ways to get
              their writings reviewed by Community. Whether you prefer working
              with Google Docs or contributing directly to the website, we've
              got you covered. This structured guide will walk you through both
              options, ensuring that your valuable content is reviewed
              effectively.{" "}
            </p>
            <ol>
              <li>
                <p>
                  <strong>Google Docs Review:</strong>
                </p>
                <p>
                  If you prefer a straightforward approach, start by crafting
                  your blog article within{" "}
                  <a href="https://docs.google.com/">Google Docs</a>, ensuring
                  it's well-structured and error-free. Share the document with
                  us by adding it to the{" "}
                  <a href="https://drive.google.com/drive/folders/1o6ZSqCq1QUJmLIjl_Y0VgT_azNbgg1W2">
                    Community Drive
                  </a>
                  , we will provide feedback directly within the Google Doc.
                  Engage in discussions to refine your content collaboratively.
                  Once thoroughly reviewed, prepare your submission according to
                  community guidelines.
                </p>
              </li>
              <li>
                <p>
                  <strong>Website Contribution Review:</strong>
                </p>
                <p>
                  For those comfortable with local website development,
                  contribute directly to the community website. <a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md">Set up your
                  local environment</a>, create a blog post adhering to specified
                  guidelines, and submit it via a Pull Request on <a href="https://github.com/layer5io/layer5/">GitHub</a>.
                  Reviewers will provide feedback, and you'll refine your post
                  collaboratively. Upon completion, maintainers will
                  merge your blog post into the website repository, celebrating
                  your contribution.
                </p>
              </li>
            </ol>

            <h3>Additional Resources</h3>
            <ul>
              <li>
                <a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#adding-a-blog-post">
                  Contributing to Layer5 Blogs
                </a>
              </li>
              <li>
                <a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#adding-a-resource">
                  Contributing to Layer5 Resources
                </a>
              </li>
              <li>
                <a href="https://github.com/layer5io/layer5/labels/area%2Fblog">
                  View open Writing Program issues
                </a>
              </li>
              <li>
                Join the{" "}
                <a href="https://discuss.layer5.io/">Layer5 Discussion Forum</a>
              </li>
              <li>
                Explore our <Link to="/resources">Resource Library</Link>
              </li>
              <li>
                <Link to="/learn">Learn Cloud Native</Link>
              </li>
            </ul>

            <TocPagination />
          </div>
        </Container>
      </div>
    </HandbookWrapper>
  );
};

export default Writers;
