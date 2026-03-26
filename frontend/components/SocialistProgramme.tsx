import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Briefcase, Users, HeartPulse, Sprout, Shield, ArrowRight, Sparkles } from 'lucide-react';

const SECTION_INNER = 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12';
const PANEL_PADDING = 'p-6 md:p-8 lg:p-10 xl:p-12';
const POLICY_CARD = 'h-full border border-gray-200 bg-white/90 p-5 md:p-6 hover:border-red-200 hover:bg-red-50/40 transition-colors';
const POLICY_ROW = 'flex items-start gap-4 h-full';
const POLICY_ICON = 'bg-red-100 text-red-800 p-3 border border-red-200 flex-shrink-0';
const POLICY_TITLE = 'text-lg md:text-xl font-bold text-gray-900 mb-2 font-serif leading-snug tracking-normal';
const POLICY_DESC = 'text-gray-600 leading-relaxed text-sm md:text-base';

const policies = [
  {
    title: "समस्तरीय संघीयता",
    icon: <Landmark size={28} />,
    desc: "समुदाय-केन्द्रित समतलीय राज्य संरचना।"
  },
  {
    title: "शासकीय स्वरूप",
    icon: <Users size={28} />,
    desc: "समावेशी चक्रीय नेतृत्वमा कार्यकारी संरचना।"
  },
  {
    title: "सामुदायिक स्वामित्व",
    icon: <Briefcase size={28} />,
    desc: "निजी स्वामित्वको अन्त्य र सामुदायिक अर्थतन्त्र।"
  },
  {
    title: "सुरक्षा नीति",
    icon: <Shield size={28} />,
    desc: "समुदायमा आधारित सुरक्षा र नागरिक तयारी।"
  },
  {
    title: "सामाजिक रूपान्तरण",
    icon: <HeartPulse size={28} />,
    desc: "जात र पितृसत्ता अन्त्य गर्दै समतामूलक रूपान्तरण।"
  },
  {
    title: "स्वायत्तता र पहिचान",
    icon: <Sprout size={28} />,
    desc: "पहिचान र अधिकारमा आधारित स्वायत्त संरचना।"
  }
];

const SocialistProgramme: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white" id="programme">
      <div className={SECTION_INNER}>
        <div className="relative overflow-hidden border border-gray-200 bg-white">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-red-100/70 blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-rose-100/70 blur-3xl" aria-hidden="true"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Branding / Introduction */}
            <div className={`lg:col-span-4 bg-gradient-to-br from-red-900 via-red-900 to-red-800 text-white flex flex-col justify-between ${PANEL_PADDING}`}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-red-300/40 text-red-100 bg-red-800/50 text-xs font-semibold tracking-wide uppercase mb-6">
                  <Sparkles size={14} />
                  कार्यक्रम सार
                </div>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-serif mb-5 leading-tight tracking-normal">
                  सामुदायिक सार्वभौम नेपाल
                </h2>
                <p className="text-red-100 text-base md:text-lg leading-relaxed max-w-md">
                  राज्य, शासन, उत्पादन सम्बन्ध र सामाजिक रूपान्तरणको संक्षिप्त दिशानिर्देश।
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/samajwadi-karyakram"
                  className="inline-flex items-center bg-white text-red-900 px-6 py-3 font-bold tracking-wide rounded-sm hover:bg-red-50 transition-colors text-sm border border-white/40"
                >
                  पूर्ण दस्तावेज पढ्नुहोस् <ArrowRight size={18} className="ml-2.5" />
                </Link>
              </div>
            </div>

            {/* Right: Policy Grid */}
            <div className={`lg:col-span-8 ${PANEL_PADDING}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                {policies.map((policy, idx) => (
                  <article key={idx} className={POLICY_CARD}>
                    <div className={POLICY_ROW}>
                      <div className={POLICY_ICON}>
                        {policy.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className={POLICY_TITLE}>
                          {policy.title}
                        </h3>
                        <p className={POLICY_DESC}>
                          {policy.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialistProgramme;