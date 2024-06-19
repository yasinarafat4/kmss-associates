import React, { useState } from "react";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceFive = () => {
  // States
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));

  return (
    <div className="dark:bg-slate-800 dark:text-slate-200">
      <ServiceBanner heading={"Our Audit & Assurance Service"} />
      {/* Definition */}
      <div className="px-[20px] py-[10px] md:px-[100px] md:py-[30px] dark:bg-slate-700 dark:text-slate-200">
        <p className="text-md lg:text-lg">
          Audit & Assurance refers to a comprehensive process that involves the
          systematic and independent evaluation of an organization's financial
          and operational information to ensure its accuracy, reliability, and
          compliance with relevant standards and regulations.
        </p>{" "}
        <br />
        <p className="text-md lg:text-lg">
          <strong>Audit</strong> specifically focuses on the detailed
          examination of financial statements and related records to express an
          opinion on their truth and fairness.
        </p>{" "}
        <br />
        <p className="text-md lg:text-lg">
          <strong>Assurance </strong> extends beyond audits to provide broader
          confidence about the integrity of both financial and non-financial
          information, enhancing the quality and credibility of data for
          stakeholders and supporting effective decision-making. Below are two
          types of Audit:
        </p>
      </div>
      {/* Accordion */}
      <div className="px-[15px] md:px-[60px] xl:px-[120px] 2xl:px-[350px] py-[16px] lg:py-[40px] dark:bg-slate-900">
        {/* External or Statuary Audit */}
        <div className="rounded-lg border-2 border-[#014AA8] dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(1)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-[#014AA8] dark:text-white font-semibold">
                  1. External or Statuary Audit
                </h2>
                <p className="text-md lg:text-lg text-[#014AA8] dark:text-white font-medium">
                  Role and Responsibilities of External Auditors
                </p>
              </div>
              <div className="rounded-full bg-white p-5">
                <svg
                  className="shrink-0 fill-[#00A2FF]"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen == 1 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 1 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 1
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-[#014AA8] dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  The overall idea of an external auditor is that it's a
                  third-party professional who performs an independent review of
                  an organization's financial records. There is one of the major
                  works include with findings of any fraud. They work as an
                  external individual without any biasness.
                </p>
                <p className="text-md lg:text-lg">
                  An external auditor must have to work extraordinarily to
                  satisfy the overall organizational needs and gain the trust
                  over the internal authorities while control the parts of
                  internal auditors.
                </p>{" "}
                <p className="text-md lg:text-lg">
                  An external auditor works for to provide nearly accurate or
                  unbiased report of the entity which will reflect the overall
                  financial condition of the management and corporate ethics.{" "}
                  <br className="lg:hidden" /> <br className="lg:hidden" />
                  External and internal auditors may perform similar, but their
                  work responsibility varies in many ways. Depending on the
                  needs or law an entity might rely on the external auditor.{" "}
                  <br className="lg:hidden" /> <br className="lg:hidden" />
                  Over all these, by performing separately an external auditor
                  must have to follow the basic rules and regulation while
                  prepare or handover any report to the entity.
                </p>
                <p className="text-md lg:text-lg">
                  An external auditor or the activities of an external auditor
                  covers everything which is not limited to- appropriate fiscal
                  requirements, accounting standards, and other legislation
                  governing the financial records of the entity.{" "}
                  <br className="lg:hidden" /> <br className="lg:hidden" /> An
                  external auditor must have to very strong analytical
                  understanding of overall situation. An external auditor must
                  have to work individually and diligently for the organization.
                </p>{" "}
                <p className="text-md lg:text-lg">
                  They can work in various areas which includes with profit loss
                  accounts, balance sheets, sales ledger, trial balance or
                  payroll etc. <br className="lg:hidden" />{" "}
                  <br className="lg:hidden" /> They must have to determine and
                  maintain proper use of accuracy and proper functioning of the
                  overall system and adequacy to control the internal audit from
                  externally within it. <br className="lg:hidden" />{" "}
                  <br className="lg:hidden" /> An external auditor must have to
                  demonstrate the ability of preparing any non-bias report and
                  examine the accounts of an entity following the legal
                  requirement and accounting standards.
                </p>
                <p className="text-md lg:text-lg">
                  An external auditor prime responsibility is to identify an
                  items or criteria which has major or minor possibility of
                  causing the financial statement to be materially misstated.{" "}
                  <br className="lg:hidden" /> <br className="lg:hidden" />
                  An external auditor is also self-employed as consultants and
                  paid by the companies which is auditing. Also, they have to
                  design also execute tests which will determine whether such
                  misstatements have occurred or not.{" "}
                </p>
                <p className="text-md lg:text-lg">
                  Moreover, there are certain public company audits which test
                  the effectiveness of internal to control over financial
                  reporting. The external audit process begins with
                  understanding the business and assessing financial reporting
                  risks, followed by designing and executing an integrated audit
                  plan.
                  <br className="lg:hidden" /> <br className="lg:hidden" /> The
                  process concludes with reporting the audit results, including
                  audit opinions and internal control findings. Despite all an
                  external auditor has to trained as to challenge the truth of
                  the material whenever he finds any mistakes or fraud.
                </p>
                <p className="text-md lg:text-lg">
                  Also identify all the areas which needs to be improved. For
                  instance, an auditor might notice that a company could be more
                  efficient in its accounting, internal controls.
                  <br className="lg:hidden" /> <br className="lg:hidden" /> In
                  this situation, he might suggest solutions like reducing
                  overhead through staff reductions or better overall inventory
                  control. There might be a possibility of facing problematic
                  irregularities, which are misstatements or lies from client.
                  <br className="lg:hidden" /> <br className="lg:hidden" />
                  Any organization can manipulate the data or financial
                  performance. This might mislead investors also ignore the
                  miscalculations.{" "}
                </p>
                <p className="text-md lg:text-lg">
                  The External Audit Coordinator must have to keep the audit
                  focused to resolve any audit issues as soon as they are made
                  known also keep informed of the auditor's progress.
                  <br className="lg:hidden" /> <br className="lg:hidden" /> KMSS
                  & ASSOCIATE External audit team's main objective is to give
                  reliability and credibility to the financial reports that go
                  to shareholders. <br className="lg:hidden" />{" "}
                  <br className="lg:hidden" />
                  They have been maintained and determined the accuracy of work
                  and organize the overall report to get accurate financial
                  statement.
                </p>
                <p className="text-md lg:text-lg">
                  Also, an external auditor has to reports to the shareholders
                  who are outside the governing structure of an organization
                  which also done diligently by KMSS & ASSOCIATE external
                  auditor team.
                  <br className="lg:hidden" /> <br className="lg:hidden" /> KMSS
                  & ASSOCIATE external audit team has always maintained the un
                  biasness in any work. There are some initial procedures which
                  an external auditor must have to follow which are not befriend
                  with the clients, manager or any employee of that particular
                  organization.
                </p>
                <p className="text-md lg:text-lg">
                  These has been maintained to bring accuracy and un bias ness.
                  Additionally, when an outside auditor is specialized in a
                  particular field of business, he often has to learn the ins
                  and outs of a specific industry before conducting an audit.
                  <br className="lg:hidden" /> <br className="lg:hidden" />
                  Which makes it easier for an external auditor to recognize
                  problems. <br className="hidden lg:block" />{" "}
                  <br className="hidden lg:block" /> The external audit team of
                  KMSS & ASSOCIATE provide an independent opinion to the
                  shareholders on the truth and fairness of the financial
                  statements.
                  <br className="lg:hidden" /> <br className="lg:hidden" />{" "}
                  Also, they provide reasonable assurance to the shareholders
                  and ensure that benefits for the company are maximized through
                  suggestion of operational improvements for management. Which
                  is known as statutory audit also.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFive;
