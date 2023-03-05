import React from "react";

function Contact(){
    return(
        <section>
            <div>
                <div class="title is-2 has-text-black is-hidden-tablet mt-4 ml-4">Contact Me</div>
                <div class="title is-1 has-text-black is-hidden-mobile mt-6 ml-6 mb-4">Contact Me</div>
            </div>

            <div class="px-6">

                <div class="field">
                    <label class="label">Name</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Name" />
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="email@example.com" />
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Please Enter Your Message Here"></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-link is-focused">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;