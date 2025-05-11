
 function Contact() {
  
  return (<>
    <h2 className="title" style={{marginTop:20}}>Happy To Help 😊</h2>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" >
        <label>Name</label>
        <input type="text" name="name" required/>

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Message</label>
        <textarea name="message" rows="5" required ></textarea>
        <button type="submit" >Send Message</button>
      </form>
    </div>
    </>
  );
}

export default Contact
