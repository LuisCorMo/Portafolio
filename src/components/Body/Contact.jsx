import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m8f96av",
        "template_07bvt5m",
        e.target,
        "oecLgA2EDyZBRNj-D"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-white mx-4 mt-4 p-8 text-gray-900 dark:text-gray-200 darkTheme">
      <form
        onSubmit={sendEmail}
        className="grid gap-2 rounded-lg text-lg font-medium"
      >
        <label>Your Name</label>
        <input
          className="rounded-lg outline-none border-[1px] p-1 px-2 bg-gray-200 darkTheme"
          type="text"
          name="user_name"
        />
        <label>Email Address</label>
        <input
          className="rounded-lg outline-none border-[1px] p-1 px-2 bg-gray-200 darkTheme"
          type="email"
          name="user_email"
        />
        <label>Message</label>
        <textarea
          className="rounded-lg outline-none border-[1px] p-1 px-2 bg-gray-200 darkTheme"
          name="message"
        />
        <input
          className="rounded-lg w-[80px] outline-none border-[1px] p-1 px-2 bg-pink-500 text-white m-auto mt-6 cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  ); 
};
export default Contact;
