import React from 'react';

const Contact = () =>{

    const submitsuccess = (val) =>{
        alert('Response Submitted Successfully');
    }
    return(
        <>
        <div className="container-fluid contactConatiner pb-2 contact">
        <h1 className="heading1 text-center mb-0">Contact</h1>
        
        <form class="form">
        <div className="form-group ">
            <div class="col-md-6">
            <label for="inputEmail4" class="form-label"></label>
            <input type="text" class="form-control text-center" id="inputName" placeholder="Full Name" required/>
        </div>
        </div>
        <div className="form-group">
         <div class="col-md-6">
            <label for="inputemail" class="form-label"></label>
            <input type="email" class="form-control text-center" id="inputEmail" placeholder="Email" required/>
        </div>
        </div>
        
        <div class="col-md-12 text-center">
            <label for="inputtextarea" class="form-label"></label>
            <textarea className="form-control w-50" id="exampleFormControlTextarea1" rows="5" placeholder="Enter your response here" required></textarea>
        </div>
        <div class="button2 col-6 mt-3 mb-5">
            <button type="submit" class="btn btn-outline-primary" onSubmit={submitsuccess}>Submit</button>
        </div>
  
</form>
</div>

        
        </>
    );
}

export default Contact;