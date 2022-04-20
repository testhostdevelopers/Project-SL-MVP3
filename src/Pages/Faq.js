import React from "react";
import { motion } from "framer-motion";

const Faq = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className="faq-container faq-sec"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="w-100">
              <h3 className="main-title">
                <b>Artwork of the week</b>
              </h3>
            </div>
            <div className="tabs">
              <div className="tab">
                <input type="checkbox" id="rd1" name="rd" defaultChecked />
                <label className="tab-label" for="rd1">
                  MarketPlace
                </label>
                <div className="tab-content sub-tabs-menu">
                  <div className="accordion">
                    <span className="target-fix" id="accordion" />

                    <div>
                      <span className="target-fix" id="accordion1" />

                      <a href="#accordion1" id="open-accordion1" title="open">
                        NFT? ERC-721 tokens?
                      </a>
                      <a href="#accordion" id="close-accordion1" title="close">
                        NFT? ERC-721 tokens?
                      </a>
                      <div className="accordion-content">
                        <p>
                          NFT stands for non-fungible tokens like ERC-721 (a
                          smart contract standard) tokens which are hosted on
                          Ethereum’s own blockchain. NFTs are unique digital
                          items such as collectibles or artworks or game items.
                          As an artist, by tokenizing your work you both ensure
                          that it is unique and brand it as your work. The
                          actual ownership is blockchain-managed.
                        </p>
                      </div>
                    </div>
                    <div>
                      <span className="target-fix" id="accordion2" />
                      <a href="#accordion2" id="open-accordion2" title="open">
                        What does “minting” mean?
                      </a>
                      <a href="#accordion" id="close-accordion2" title="close">
                        What does “minting” mean?
                      </a>
                      <div className="accordion-content">
                        <p>Accordion 2 Content.</p>
                      </div>
                    </div>
                    <div>
                      <span className="target-fix" id="accordion3" />
                      <a href="#accordion3" id="open-accordion3" title="open">
                        Can I create an NFT on rarible.com without putting it on
                        sale?
                      </a>
                      <a href="#accordion" id="close-accordion3" title="close">
                        Can I create an NFT on rarible.com without putting it on
                        sale?
                      </a>
                      <div className="accordion-content">
                        <p>Accordion 3 Content</p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion4" />
                      <a href="#accordion4" id="open-accordion4" title="open">
                        Can I gift or send a collectible to someone?
                      </a>
                      <a href="#accordion" id="close-accordion4" title="close">
                        Can I gift or send a collectible to someone?
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perferendis incidunt adipisci inventore ratione
                          delectus facere aliquam odit libero, nostrum
                          dignissimos tenetur a reprehenderit magnam minus
                          tempore voluptatum id harum expedita.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion5" />
                      <a href="#accordion5" id="open-accordion5" title="open">
                        What does “burn a token” mean?
                      </a>
                      <a href="#accordion" id="close-accordion5" title="close">
                        What does “burn a token” mean?
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Natus non ea deserunt rem blanditiis? Iusto
                          distinctio impedit blanditiis ullam eveniet non
                          expedita officia rerum ratione repellat? Voluptatibus,
                          dicta. Tenetur, possimus!
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion6" />
                      <a href="#accordion6" id="open-accordion6" title="open">
                        Do you have an OpenSea integration?
                      </a>
                      <a href="#accordion" id="close-accordion6" title="close">
                        Do you have an OpenSea integration?
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion7" />
                      <a href="#accordion7" id="open-accordion7" title="open">
                        What is the purpose of $RARI as a governance token?
                      </a>
                      <a href="#accordion" id="close-accordion7" title="close">
                        What is the purpose of $RARI as a governance token?
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion8" />
                      <a href="#accordion8" id="open-accordion8" title="open">
                        What is “unlockable content”?
                      </a>
                      <a href="#accordion" id="close-accordion8" title="close">
                        What is “unlockable content”?
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion9" />
                      <a href="#accordion9" id="open-accordion9" title="open">
                        How does the royalty system work?
                      </a>
                      <a href="#accordion" id="close-accordion9" title="close">
                        How does the royalty system work?
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion10" />
                      <a href="#accordion10" id="open-accordion10" title="open">
                        I would like to suggest additional features!
                      </a>
                      <a href="#accordion" id="close-accordion10" title="close">
                        I would like to suggest additional features!
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion11" />
                      <a href="#accordion11" id="open-accordion11" title="open">
                        Can I report an artwork or collectible?
                      </a>
                      <a href="#accordion" id="close-accordion11" title="close">
                        Can I report an artwork or collectible?
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion12" />
                      <a href="#accordion12" id="open-accordion12" title="open">
                        What is verification?{" "}
                      </a>
                      <a href="#accordion" id="close-accordion12" title="close">
                        What is verification?{" "}
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion13" />
                      <a href="#accordion13" id="open-accordion13" title="open">
                        How to get a "verified" badge?{" "}
                      </a>
                      <a href="#accordion" id="close-accordion13" title="close">
                        How to get a "verified" badge?{" "}
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="target-fix" id="accordion14" />
                      <a href="#accordion14" id="open-accordion14" title="open">
                        It's been a while and I don't get verified. Why?{" "}
                      </a>
                      <a href="#accordion" id="close-accordion14" title="close">
                        It's been a while and I don't get verified. Why?{" "}
                      </a>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Sequi aperiam dignissimos corrupti mollitia
                          praesentium minima dolore porro eos voluptates
                          accusantium numquam error, iste nam in deleniti,
                          explicabo repudiandae doloremque velit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="rd2" name="rd" />
                <label className="tab-label" for="rd2">
                  Governance
                </label>
                <div className="tab-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, aut.
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="rd3" name="rd" />
                <label className="tab-label" for="rd3">
                  $---- token
                </label>
                <div className="tab-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, aut.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
