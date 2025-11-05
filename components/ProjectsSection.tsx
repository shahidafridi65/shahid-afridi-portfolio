"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Custom Bitbucket icon since lucide-react doesn't have it
const BitbucketIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
		<path d="M2.65 1.333a.695.695 0 0 0-.582.335L.068 7.79a.695.695 0 0 0 .048.692.695.695 0 0 0 .584.302h4.18l.96 5.876a.695.695 0 0 0 .685.584h.002a.695.695 0 0 0 .685-.584l.96-5.876h4.18a.695.695 0 0 0 .584-.302.695.695 0 0 0 .048-.692L13.93 1.668a.695.695 0 0 0-.582-.335H2.65zm.97 2.734h8.758l-.64 3.932H4.26l-.64-3.932z" />
	</svg>
);

const projects = [
	{
		id: 1,
		title: "Enterprise Form Builder and Automation Platform",
		description: "Architected a visual development platform for dynamic form generation that streamlined critical business workflows and reduced development time for new forms by 75%.",
		longDescription: "A comprehensive form builder platform featuring drag-and-drop UI with real-time previews, complex grid-based layouts, conditional logic engine for custom validation rules, and robust security model with Role-Based Access Control (RBAC) system. Engineered to enhance user experience while significantly improving data collection accuracy and integrity.",
		image: "/projects/form-builder.png",
		technologies: ["React 19", "TypeScript", "DND Kit", "Framer Motion", "AG Grid", "Tailwind CSS"],
		githubUrl: "https://bitbucket.org/emvive/emvive_dynamic_forms/",
		demoUrl: "http://143.110.243.208:9002",
		featured: true,
		repoType: "bitbucket"
	},
	{
		id: 2,
		title: "Core ERP Module and Platform Development",
		description: "Built the backbone of the company's flagship ERP platform, creating a secure, multi-tenant system from the ground up to handle all critical business operations.",
		longDescription: "Architected the foundational multi-tenant system for the core ERP platform with over 40 complex modules for key business verticals (Sales, Purchasing, Accounting). Implemented robust security and authentication layer with legal entity selection, dynamic line-item management, and advanced UI components to support complex entity-specific workflows.",
		image: "/projects/erp-platform.png",
		technologies: ["React", "TypeScript", "Vite", "Radix UI", "TanStack Table", "Zod", "Axios", "Tailwind CSS"],
		githubUrl: "https://bitbucket.org/emvive/emvive_sales_frontend/",
		demoUrl: "http://143.110.243.208:9001/dashboard",
		featured: true,
		repoType: "bitbucket"
	},
	{
		id: 3,
		title: "Full Stack AI Chatbot: Emvive Interactive Assistant",
		description: "Led the full stack development of a conversational AI assistant to automate and simplify complex enterprise data entry workflows.",
		longDescription: "Architected a highly scalable, metadata-driven backend using Python (FastAPI) with central JSON configuration dynamically controlling entire conversational flow. Engineered complete solution from concept to production including responsive React frontend and containerized multi-service deployment using Docker and Docker Compose.",
		image: "/projects/ai-chatbot.png",
		technologies: ["Python", "FastAPI", "React", "Docker", "Docker Compose", "NGINX", "REST APIs"],
		githubUrl: "https://bitbucket.org/emvive/emvive_nextjs",
		demoUrl: "http://143.110.243.208:9001/dashboard",
		featured: false,
		repoType: "bitbucket"
	},
];

// Project Card Component matching the reference design
const ProjectCard = ({ project, position = 0, onClick }: { project: any; position?: number; onClick?: () => void }) => {
	const isActive = position === 0;

	return (
		<motion.div
			className={`flex flex-col relative rounded-xl p-6 transition-all duration-300 select-none cursor-pointer ${isActive
				? 'w-[320px] sm:w-[380px] md:w-[450px] min-h-[550px] bg-gradient-to-br from-[var(--bg-800)] to-[var(--bg-700)] shadow-2xl scale-100 z-30 border border-[var(--border)] mx-2 sm:mx-4'
				: 'w-[280px] sm:w-[320px] md:w-[380px] min-h-[500px] bg-[var(--bg-800)] shadow-lg scale-90 opacity-70 z-20 border border-[var(--border)] mx-2 sm:mx-4'}`}
			whileHover={!isActive ? { scale: 0.95, opacity: 0.8 } : {}}
			onClick={onClick}
			style={{
				transformStyle: 'preserve-3d',
			}}
		>
			{/* Project Image/Logo */}
			<div className="relative h-52 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-gray-700 flex items-center justify-center">
				{project.image ? (
					// If image exists, show the image
					<div className="w-full h-full relative">
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover"
							onError={(e) => {
								// If image fails to load, fallback to initials
								e.currentTarget.style.display = 'none';
								const parent = e.currentTarget.parentElement;
								if (parent) {
									const fallback = document.createElement('div');
									fallback.className = 'text-center';
									fallback.innerHTML = `
              <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div class="text-white font-bold text-xl">
                  ${project.title.split(' ').map((word: string) => word[0]).join('')}
                </div>
              </div>
              <p class="text-white text-sm font-medium">${project.title}</p>
            `;
									parent.appendChild(fallback);
								}
							}}
						/>
					</div>
				) : (
					// If no image, show initials
					<div className="text-center">
						<div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
							<div className="text-white font-bold text-xl">
								{project.title.split(' ').map((word: string) => word[0]).join('')}
							</div>
						</div>
						<p className="text-white text-sm font-medium">{project.title}</p>
					</div>
				)}
			</div>

			{/* Project Content */}
			<div className="space-y-4 flex-1">
				<div>
					<h3 className={`font-bold text-[var(--text)] mb-3 ${isActive ? 'text-2xl' : 'text-xl'}`}>
						{project.title}
					</h3>
					<p className={`text-[var(--muted)] leading-relaxed ${isActive ? 'text-base' : 'text-sm'}`}>
						{isActive ? project.longDescription : project.description}
					</p>
				</div>

				{/* Technologies */}
				<div className="flex flex-wrap gap-2">
					{project.technologies.slice(0, isActive ? project.technologies.length : 3).map((tech: string, index: number) => (
						<span
							key={index}
							className={`px-3 py-1 bg-[var(--bg-700)] text-blue-400 rounded-full border border-[var(--border)] font-medium ${isActive ? 'text-sm' : 'text-xs'}`}
						>
							{tech}
						</span>
					))}
					{!isActive && project.technologies.length > 3 && (
						<span className="px-3 py-1 bg-gray-700 text-gray-400 text-xs rounded-full border border-gray-600 font-medium">
							+{project.technologies.length - 3} more
						</span>
					)}
				</div>

				{/* Action Buttons - Only for active project */}
				{isActive && (
					<motion.div
						className="flex gap-4 pt-6 border-t border-gray-700 mt-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						<motion.a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-700)] hover:bg-blue-600 text-[var(--muted)] hover:text-white rounded-lg transition-all duration-300 font-medium flex-1 justify-center"
						>
							{project.repoType === 'github' ? (
								<Github className="w-5 h-5" />
							) : (
								<BitbucketIcon />
							)}
							{project.repoType === 'github' ? 'GitHub' : 'Bitbucket'}
						</motion.a>
						<motion.a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg transition-all duration-300 font-medium flex-1 justify-center"
						>
							<ExternalLink className="w-5 h-5" />
							Live Demo
						</motion.a>
					</motion.div>
				)}

				{/* Featured Badge */}
				{project.featured && isActive && (
					<motion.div
						className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full font-bold"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.5 }}
					>
						Featured
					</motion.div>
				)}
			</div>

			{/* Click hint for non-active cards */}
			{!isActive && (
				<div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-xl transition-all duration-300 flex items-center justify-center">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2 }}
						className="text-[var(--text)] text-sm font-semibold bg-[var(--bg-900)] bg-opacity-70 px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
					>
						Click to view
					</motion.div>
				</div>
			)}
		</motion.div>
	);
};

export default function ProjectsSection() {
	const ref = useRef(null);
	const carouselRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const titleFontSize = useTransform(scrollYProgress, [0, 0.5, 1], ["6rem", "4rem", "3rem"]);
	const circleSize = useTransform(scrollYProgress, [0, 0.5, 1], ["12rem", "10rem", "8rem"]);
	const circleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.05, 0.02]);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % projects.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	// Get visible projects with proper circular positioning
	const getVisibleProjects = () => {
		const visible = [];

		for (let i = -1; i <= 1; i++) {
			let index = currentIndex + i;

			// Handle circular indexing
			if (index < 0) {
				index = projects.length + index;
			} else if (index >= projects.length) {
				index = index % projects.length;
			}

			visible.push({
				project: projects[index],
				position: i,
				originalIndex: index
			});
		}

		return visible;
	};

	// Drag handlers for mobile
	const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
		setIsDragging(true);
		setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
	};

	const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
		if (!isDragging) return;

		const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const diff = startX - currentX;

		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
			setIsDragging(false);
		}
	};

	const handleDragEnd = () => {
		setIsDragging(false);
	};

	// Auto-advance slides
	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide();
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	const visibleProjects = getVisibleProjects();

	return (
		<section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-900)] relative overflow-hidden">
			{/* Background Animation */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-900)] via-[var(--bg-800)] to-[var(--bg-900)]"></div>

				{/* Heartbeat Circle Animation with dynamic sizing */}
				<div className="absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<motion.div
						className="relative rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
						style={{
							width: circleSize,
							height: circleSize,
							opacity: circleOpacity
						}}
						animate={{
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					>
						<motion.div
							className="absolute inset-0 border-4 border-[var(--color-primary)] rounded-full"
							style={{
								opacity: circleOpacity
							}}
							animate={{
								scale: [1, 1.4, 1],
								opacity: [0.3, 0, 0.3],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
					</motion.div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto relative">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center flex flex-col items-center justify-center relative z-20 mb-24"
					style={{
						minHeight: '16rem'
					}}
				>
					<motion.h2
						className="font-bold mb-4 text-[var(--text)]"
						style={{
							fontSize: titleFontSize
						}}
					>
						PROJECTS
					</motion.h2>
					<p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl">
						A collection of my recent work and personal projects
					</p>
				</motion.div>


				<div className="relative h-[650px] flex items-center justify-center w-full">
					<div
						ref={carouselRef}
						className="flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
						onMouseDown={handleDragStart}
						onMouseMove={handleDragMove}
						onMouseUp={handleDragEnd}
						onMouseLeave={handleDragEnd}
						onTouchStart={handleDragStart}
						onTouchMove={handleDragMove}
						onTouchEnd={handleDragEnd}
						style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
					>
						{visibleProjects.map(({ project, position, originalIndex }) => (
							<motion.div
								key={`${project.id}-${position}`}
								className={`${position === 0 ? 'z-30' : 'z-20'}`}
								initial={false}
								animate={{
									x: position * 80,
									scale: position === 0 ? 1 : 0.85,
									opacity: position === 0 ? 1 : 0.6,
									rotateY: position * 10,
								}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 25,
									duration: 0.6
								}}
								style={{
									transformStyle: 'preserve-3d',
								}}
							>
								<ProjectCard
									project={project}
									position={position}
									onClick={() => goToSlide(originalIndex)}
								/>
							</motion.div>
						))}
					</div>
				</div>

				{/* Project Indicators */}
				<div className="flex justify-center gap-3 mt-16">
					{projects.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
								? 'bg-blue-500 scale-125'
								: 'bg-[var(--bg-700)] hover:bg-[var(--muted)]'
								}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}