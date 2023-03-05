import React from "react";
import ccna from "../../images/ccnaitn.png"
import cs50 from "../../images/harvardx.jpg"

function Certifications(){
    return(
        <section>
            <div>
                <div class="title is-2 has-text-black is-hidden-tablet mt-4 ml-4">Certifications</div>
                <div class="title is-1 has-text-black is-hidden-mobile mt-6 ml-6 mb-4">Certifications</div>
            </div>

            <div class="columns is-mobile is-centered is-vcentered p-4">
                <div class="column is-one-quarter-tablet edu-icon">
                    <img src={ccna} alt="Logo" />
                </div>
                <div class="column is-half-tablet">
                    <span class="is-size-5-mobile is-size-4-tablet has-text-black has-text-weight-medium">
                        CCNA: Introduction to Networks
                    </span><br />
                    <span class="is-size-5 has-text-weight-semibold">Cisco</span>
                </div>
            </div>

            <div class="columns is-mobile is-centered is-vcentered p-4">
                <div class="column is-one-quarter-tablet edu-icon">
                    <img src={cs50} alt="Logo" />
                </div>
                <div class="column is-half-tablet">
                    <span class="is-size-5-mobile is-size-4-tablet has-text-black has-text-weight-medium">
                        CS50: Introduction to Computer Science
                    </span><br />
                    <span class="is-size-5 has-text-weight-semibold">HarvardX</span>
                </div>
            </div>
        </section>
    );
}

export default Certifications;