"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { t } = useLang();
  const jobs = t.experience.jobs;

  return (
    <SectionWrapper id="experience">
      <SectionTitle>{t.experience.title}</SectionTitle>

      <div className="mt-12 relative space-y-10">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent" />

        {jobs.map((job, jobIdx) => (
          <motion.div
            key={jobIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: jobIdx * 0.1 }}
            className="relative pl-16 md:pl-20"
          >
            <div className="absolute left-[18px] md:left-[26px] top-8 z-10">
              <div
                className={`w-3 h-3 rounded-full ring-4 ring-offset-2 ring-offset-[#050510] ${
                  jobIdx === 0
                    ? "bg-indigo-500 ring-indigo-500/20"
                    : "bg-violet-500/70 ring-violet-500/15"
                }`}
              />
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10 border-gradient">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={18} className="text-indigo-400" />
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">
                      {job.role}
                    </h3>
                  </div>
                  <p className="text-indigo-400/80 font-medium text-sm">
                    {job.company}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1.5 text-sm text-white/60">
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full text-xs">
                    <Calendar size={12} />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full text-xs">
                    <MapPin size={12} />
                    {job.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {job.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 text-[15px] text-white/65 leading-relaxed group"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-indigo-500/40 group-hover:text-indigo-400 transition-colors duration-300"
                    />
                    <span className="group-hover:text-white/85 transition-colors duration-300">
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
