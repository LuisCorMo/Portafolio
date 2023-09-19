import emailjs from '@emailjs/browser';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m8f96av', 'template_07bvt5m', e.target, 'oecLgA2EDyZBRNj-D')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='mx-4 mt-6 p-2 text-gray-900 dark:text-gray-200 bg-white darkTheme'>
      <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};
export default Contact;
