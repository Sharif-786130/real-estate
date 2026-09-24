// import { useState } from "react";
// import { Button, Field } from "../components/UI.jsx";
// import { IconCheck, IconMapPin, IconPhone, IconMail, IconClock } from "../components/Icons.jsx";
// import ScrollReveal from "../components/scrollReaveal.jsx";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [sent, setSent] = useState(false);
//   const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

//   const submit = (e) => {
//     e.preventDefault();
//     if (form.name && form.email.includes("@") && form.message) setSent(true);
//   };

//   const contactInfo = [
//     [IconMapPin, "Office", "214 Kestrel Row, Austin, TX 78701"],
//     [IconPhone, "Phone", "(512) 555-0148"],
//     [IconMail, "Email", "hello@fortunecapital.example"],
//     [IconClock, "Hours", "Mon–Fri, 8:00–18:00 CT"],
//   ];

//   return (
//     <div className="bg-theme min-h-screen">

//       <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-20 grid md:grid-cols-2 gap-14">

//         {/* =====================================================
//             LEFT: INFO
//             ===================================================== */}
//         <ScrollReveal direction="left">
//           <div>
//             <p className="text-xs tracking-[0.2em] text-faint mb-4">CONTACT</p>
//             <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] max-w-[16ch] text-ink">
//               Talk to a{" "}
//               <span className="italic text-brass">real person.</span>
//             </h1>
//             <p className="text-soft mt-5 max-w-[42ch] leading-relaxed">
//               Questions about a listing, an agent, or your account — write to us
//               and we'll reply within one business day.
//             </p>

//             <div className="mt-10 flex flex-col gap-4">
//               {contactInfo.map(([Ic, label, value]) => (
//                 <div
//                   key={label}
//                   className="group flex items-center gap-4 bg-elevated border hairline rounded-xl p-4 hover:border-brass hover:shadow-md transition-all duration-300"
//                 >
//                   <div className="w-11 h-11 rounded-full bg-brass/10 flex items-center justify-center text-brass shrink-0 group-hover:bg-brass group-hover:text-white transition-all duration-300">
//                     <Ic size={18} />
//                   </div>
//                   <div>
//                     <p className="text-faint text-xs mb-0.5">{label}</p>
//                     <p className="text-ink text-sm font-medium">{value}</p>
//                   </div>
//                 </div>
//               ))}

//             </div>

//           </div>
//         </ScrollReveal>

//         {/* =====================================================
//             RIGHT: FORM
//             ===================================================== */}

//         <div className="bg-elevated border hairline rounded-2xl p-8 shadow-sm h-fit">
//           <ScrollReveal direction="right">

//             {sent ? (
//               <div className="flex flex-col items-start gap-4 py-6">
//                 <div className="w-16 h-16 rounded-full bg-brass flex items-center justify-center text-white shadow-md">
//                   <IconCheck size={28} />
//                 </div>
//                 <h3 className="font-display text-2xl text-ink">Message sent.</h3>
//                 <p className="text-soft text-sm leading-relaxed">
//                   We'll reply to <span className="text-ink font-medium">{form.email}</span> within one business day.
//                 </p>
//                 <Button
//                   variant="outline"
//                   className="mt-3"
//                   onClick={() => {
//                     setSent(false);
//                     setForm({ name: "", email: "", message: "" });
//                   }}
//                 >
//                   Send another message
//                 </Button>
//               </div>
//             ) : (
//               <form onSubmit={submit} className="flex flex-col gap-5">

//                 <p className="font-display text-xl text-ink mb-1">Send us a message</p>

//                 <Field label="Name" value={form.name} onChange={set("name")} placeholder="Jordan Lee" required />
//                 <Field
//                   label="Email"
//                   type="email"
//                   value={form.email}
//                   onChange={set("email")}
//                   placeholder="jordan@email.com"
//                   required
//                 />
//                 <label className="flex flex-col gap-1.5 text-sm">
//                   <span className="text-soft font-medium">Message</span>
//                   <textarea
//                     rows="5"
//                     value={form.message}
//                     onChange={set("message")}
//                     placeholder="How can we help?"
//                     className="border hairline rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-brass focus:ring-2 focus:ring-brass/15 resize-none transition-all"
//                     required
//                   />
//                 </label>
//                 <Button type="submit" className="self-start">
//                   Send message
//                 </Button>
//               </form>
//             )}
//           </ScrollReveal>
//         </div>

//       </div>


//     </div>
//   );
// };

// export default Contact;



import { useState } from "react";
import { Button, Field } from "../components/UI.jsx";
import { IconCheck, IconMapPin, IconPhone, IconMail, IconClock } from "../components/Icons.jsx";
import ScrollReveal from "../components/scrollReaveal.jsx";

const contactInfo = [
  [IconMapPin, "Office", "214 Kestrel Row, Austin, TX 78701"],
  [IconPhone, "Phone", "(512) 555-0148"],
  [IconMail, "Email", "hello@fortunecapital.example"],
  [IconClock, "Hours", "Mon–Fri, 8:00–18:00 CT"],
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.email.includes("@") && form.message) setSent(true);
  };

  return (
    <div className="bg-theme min-h-screen overflow-x-clip">

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-20 grid md:grid-cols-2 gap-14">

        {/* =====================================================
            LEFT: INFO
            Intro text reveals from the left; each contact card
            reveals on its own, following the scroll direction.
            ===================================================== */}

        <div>

          <ScrollReveal direction="left">
            <div>
              <p className="text-xs tracking-[0.2em] text-faint mb-4">CONTACT</p>
              <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] max-w-[16ch] text-ink">
                Talk to a{" "}
                <span className="italic text-brass">real person.</span>
              </h1>
              <p className="text-soft mt-5 max-w-[42ch] leading-relaxed">
                Questions about a listing, an agent, or your account — write to us
                and we'll reply within one business day.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 flex flex-col gap-4">
            {contactInfo.map(([Ic, label, value], idx) => (
              <ScrollReveal key={label} direction="bottom" delay={idx * 100}>
                <div className="group flex items-center gap-4 bg-elevated border hairline rounded-xl p-4 hover:border-brass hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-full bg-brass/10 flex items-center justify-center text-brass shrink-0 group-hover:bg-brass group-hover:text-white transition-all duration-300">
                    <Ic size={18} />
                  </div>
                  <div>
                    <p className="text-faint text-xs mb-0.5">{label}</p>
                    <p className="text-ink text-sm font-medium">{value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>


        {/* =====================================================
            RIGHT: FORM
            The whole card reveals (border included), so the
            sent / form swap inside it doesn't replay the effect.
            ===================================================== */}

        <ScrollReveal direction="right" delay={100}>
          <div className="bg-elevated border hairline rounded-2xl p-8 shadow-sm h-fit">

            {sent ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <div className="w-16 h-16 rounded-full bg-brass flex items-center justify-center text-white shadow-md">
                  <IconCheck size={28} />
                </div>
                <h3 className="font-display text-2xl text-ink">Message sent.</h3>
                <p className="text-soft text-sm leading-relaxed">
                  We'll reply to <span className="text-ink font-medium">{form.email}</span> within one business day.
                </p>
                <Button
                  variant="outline"
                  className="mt-3"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">

                <p className="font-display text-xl text-ink mb-1">Send us a message</p>

                <Field label="Name" value={form.name} onChange={set("name")} placeholder="Jordan Lee" required />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="jordan@email.com"
                  required
                />
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="text-soft font-medium">Message</span>
                  <textarea
                    rows="5"
                    value={form.message}
                    onChange={set("message")}
                    placeholder="How can we help?"
                    className="border hairline rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-brass focus:ring-2 focus:ring-brass/15 resize-none transition-all"
                    required
                  />
                </label>
                <Button type="submit" className="self-start">
                  Send message
                </Button>
              </form>
            )}

          </div>
        </ScrollReveal>

      </div>

    </div>
  );
};

export default Contact;