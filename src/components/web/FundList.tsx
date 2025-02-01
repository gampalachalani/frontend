import React, { useState, useEffect } from 'react';
import { getAllFunds } from '../../services/Funding';
import { Project } from '../../interfaces/Project';

const FundList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllFunds();
        console.log('Fetched projects:', response.data); // Log fetched data
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          console.error('Invalid data format', response.data);
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProjects();
  }, []);

  // Define a larger set of images
  const images = [
    'public/img/f1.jpg',
    'public/img/f2.png',
    'public/img/f3.jpg',
    'public/img/f4.jpg',
    'public/img/f5.jpg',
    'public/img/f6.jpg',
    'public/img/f7.jpg',
    'public/img/f8.jpg',
  ];

  // Function to get a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imagePath = images[randomIndex];
    console.log('Selected image path:', imagePath); // Log selected image
    return imagePath;
  };

  return (
    <div className="container">
      <div className="row">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={project.projectId} className="col-md-3 mb-4">
              <div className="card">
                <img src={getRandomImage()} className="card-img-top" alt="Project" />
                <div className="card-body">
                  <h5 className="card-title">{project.projectName}</h5>
                  <p className="card-text">{project.description}</p>
                  <p><strong>Target Amount:</strong> ${project.targetAmount}</p>
                  <p><strong>Current Amount:</strong> ${project.currentAmount}</p>
                  <p><strong>Owner ID:</strong> {project.projectOwnerId}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default FundList;