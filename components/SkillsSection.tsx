"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const skillCategories = [
	{
		id: "frontend",
		title: "Frontend Development",
		isLearning: false,
		skills: [
			{ name: "React/Next.js", level: 85, logo: "/skills/react.png" },
			{ name: "TypeScript", level: 80, logo: "/skills/typescript.png" },
			{ name: "Tailwind CSS", level: 82, logo: "/skills/tailwind.png" },
			{ name: "Framer Motion", level: 85, logo: "/skills/framer.png" },
			{ name: "JavaScript ES6+", level: 90, logo: "/skills/javascript.png" }
		]
	},
	{
		id: "backend",
		title: "Backend Development",
		isLearning: false,
		skills: [
			{ name: "Node.js", level: 88, logo: "/skills/nodejs.png" },
			{ name: "Python", level: 85, logo: "/skills/python.png" },
			{ name: "FastAPI", level: 82, logo: "/skills/fastapi.png" },
			{ name: "Express.js", level: 53, logo: "/skills/express.png" },
			{ name: "REST APIs", level: 90, logo: "/skills/api.png" }
		]
	},
	{
		id: "database",
		title: "Database & ORM",
		isLearning: false,
		skills: [
			{ name: "PostgreSQL", level: 85, logo: "/skills/postgresql.png" },
			{ name: "MongoDB", level: 80, logo: "/skills/mongodb.png" },
			{ name: "MySQL", level: 75, logo: "/skills/mysql.png" },
			{ name: "Firebase", level: 78, logo: "/skills/firebase.png" },
			{ name: "Prisma", level: 70, logo: "/skills/prisma.png" }
		]
	},
	{
		id: "ai-ml",
		title: "AI & Machine Learning",
		isLearning: true,
		skills: [
			{ name: "Python", level: 85, logo: "/skills/python.png" },
			{ name: "TensorFlow", level: 70, logo: "/skills/tensorflow.png" },
			{ name: "scikit-learn", level: 75, logo: "/skills/scikit.png" },
			{ name: "LangChain", level: 65, logo: "/skills/langchain.png" },
			{ name: "OpenAI API", level: 80, logo: "/skills/openai.png" }
		]
	},
	{
		id: "cloud",
		title: "Cloud & DevOps",
		isLearning: false,
		skills: [
			{ name: "AWS", level: 75, logo: "/skills/aws.png" },
			{ name: "Docker", level: 80, logo: "/skills/docker.png" },
			{ name: "Vercel", level: 85, logo: "/skills/vercel.png" },
			{ name: "Git/GitHub", level: 90, logo: "/skills/github.png" },
			{ name: "NGINX", level: 70, logo: "/skills/nginx.png" }
		]
	},
	{
		id: "tools",
		title: "Tools & Technologies",
		isLearning: false,
		skills: [
			{ name: "Git", level: 90, logo: "/skills/git.png" },
			{ name: "Postman", level: 85, logo: "/skills/postman.png" },
			{ name: "VS Code", level: 95, logo: "/skills/vscode.png" },
			{ name: "Figma", level: 68, logo: "/skills/figma.png" },
			{ name: "Jira", level: 75, logo: "/skills/jira.png" }
		]
	}
];

export default function SkillsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [openCategory, setOpenCategory] = useState<string | null>("frontend");

	const toggleCategory = (categoryId: string) => {
		setOpenCategory(openCategory === categoryId ? null : categoryId);
	};

	return (
		<section id="skills" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 bg-[color:var(--bg-900)]">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 md:mb-16"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
						<span className="text-[color:var(--text)]">Technical </span>
						<span className="text-[color:var(--color-primary)]">Skills</span>
					</h2>
					<p className="text-[color:var(--muted)] text-base md:text-lg max-w-2xl mx-auto px-4">
						Technologies and tools I work with to bring ideas to life
					</p>
				</motion.div>

				{/* Skills Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.id}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="flex flex-col"
						>
							{/* Category Header */}
							<motion.div
								className={`card-glass p-4 md:p-6 rounded-2xl glow-container cursor-pointer transition-all duration-300 ${openCategory === category.id ? 'rounded-b-none' : ''
									}`}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								onClick={() => toggleCategory(category.id)}
							>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2 md:gap-3">
										<h3 className="text-lg md:text-xl font-bold text-[color:var(--text)]">
											{category.title}
										</h3>
										{category.isLearning && (
											<span className="px-2 py-1 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] text-white text-xs rounded-full font-medium">
												Learning
											</span>
										)}
									</div>
									<motion.div
										animate={{ rotate: openCategory === category.id ? 180 : 0 }}
										transition={{ duration: 0.3 }}
									>
										{openCategory === category.id ? (
											<ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-[color:var(--color-primary)]" />
										) : (
											<ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-[color:var(--muted)]" />
										)}
									</motion.div>
								</div>

								{/* Skills Preview */}
								<div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4 flex-wrap">
									{category.skills.slice(0, 3).map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											className="flex items-center gap-1 md:gap-2 bg-[color:var(--bg-700)] px-2 py-1 md:px-3 md:py-2 rounded-lg border border-[color:var(--border)]"
											whileHover={{ y: -2 }}
											transition={{ duration: 0.2 }}
										>
											<div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded flex items-center justify-center flex-shrink-0">
												<Image
													src={skill.logo}
													alt={skill.name}
													width={16}
													height={16}
													className="w-3 h-3 md:w-4 md:h-4 rounded object-contain"
												/>
											</div>
											<span className="text-xs md:text-sm text-[color:var(--text)] font-medium hidden sm:block">
												{skill.name.split('/')[0]}
											</span>
										</motion.div>
									))}
									{category.skills.length > 3 && (
										<span className="text-[color:var(--muted)] text-xs md:text-sm font-medium">
											+{category.skills.length - 3} more
										</span>
									)}
								</div>
							</motion.div>

							{/* Expanded Skills Details */}
							<AnimatePresence>
								{openCategory === category.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className="card-glass rounded-b-2xl glow-container border-t-0 overflow-hidden"
									>
										<div className="p-4 md:p-6 space-y-3 md:space-y-4">
											{category.skills.map((skill, skillIndex) => (
												<motion.div
													key={skillIndex}
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
													className="flex items-center justify-between"
												>
													<div className="flex items-center gap-2 md:gap-3 flex-1">
														<div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded flex items-center justify-center flex-shrink-0">
															<div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded flex items-center justify-center flex-shrink-0">
																<Image
																	src={skill.logo}
																	alt={skill.name}
																	width={16}
																	height={16}
																	className="w-3 h-3 md:w-4 md:h-4 rounded object-contain"
																/>
															</div>
														</div>
														<div className="flex-1 min-w-0">
															<span className="text-sm md:text-base text-[color:var(--text)] font-medium block truncate">
																{skill.name}
															</span>
															<div className="w-full bg-[color:var(--bg-700)] rounded-full h-1.5 md:h-2 mt-1">
																<motion.div
																	initial={{ width: 0 }}
																	animate={{ width: `${skill.level}%` }}
																	transition={{ duration: 1, delay: skillIndex * 0.1 }}
																	className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] h-1.5 md:h-2 rounded-full relative"
																>
																	<motion.span
																		initial={{ opacity: 0 }}
																		animate={{ opacity: 1 }}
																		transition={{ delay: 1 + skillIndex * 0.1 }}
																		className="absolute -top-5 md:-top-6 right-0 text-xs text-[color:var(--color-primary)] font-bold"
																	>
																		{skill.level}%
																	</motion.span>
																</motion.div>
															</div>
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}