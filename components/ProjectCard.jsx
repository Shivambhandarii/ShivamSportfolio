"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";

const ProjectCard = ({ project }) => {
  const router = useRouter();

  const targetHref = useMemo(
    () => project.pageLink || `/projects/${project.slug}`,
    [project.pageLink, project.slug]
  );

  const handleClick = () => {
    router.push(targetHref);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group block h-full cursor-pointer"
      onClick={handleClick}
    >
      <Card className="relative h-full overflow-hidden rounded-[32px]">
        <CardHeader className="p-0">
          <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat xl:dark:bg-work_project_bg_dark">
            <Image
              className="absolute bottom-0 rounded-t-lg shadow-2xl"
              src={project.image}
              width={247}
              height={130}
              alt={project.name}
              priority
            />
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <div className="top-4 mb-4 flex flex-wrap justify-start">
            {Array.isArray(project.tags)
              ? project.tags.map((tagName, index) => (
                  <Badge
                    key={index}
                    className="mb-2 mr-2 text-sm font-medium uppercase"
                  >
                    {tagName}
                  </Badge>
                ))
              : null}
          </div>
          <h4 className="h4 mb-2">{project.name}</h4>
          <p className="text-lg text-muted-foreground">{project.description}</p>
          <div className="mt-6 text-sm font-medium text-secondary flex items-center gap-2">
            <span>{project.buttonText || "View Case Study"}</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
