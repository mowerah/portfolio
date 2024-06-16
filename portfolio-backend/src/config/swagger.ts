import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio API",
      version: "1.0.0",
      description: "A simple CRUD API application for a developer portfolio",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
components: {
      schemas: {
        Profile: {
          type: 'object',
          required: ['name', 'email'],
          properties: {
            id: {
              type: 'integer',
              description: 'The auto-generated id of the profile',
            },
            name: {
              type: 'string',
              description: 'Name of the profile',
            },
            bio: {
              type: 'string',
              description: 'Biography of the profile',
            },
            location: {
              type: 'string',
              description: 'Location of the profile',
            },
            nationality: {
              type: 'string',
              description: 'Nationality of the profile',
            },
            availability: {
              type: 'boolean',
              description: 'Availability status of the profile',
            },
            dateOfBirth: {
              type: 'string',
              format: 'date',
              description: 'Date of birth of the profile',
            },
            email: {
              type: 'string',
              description: 'Email of the profile',
            },
            phone: {
              type: 'string',
              description: 'Phone number of the profile',
            },
            address: {
              type: 'string',
              description: 'Address of the profile',
            },
            github: {
              type: 'string',
              description: 'GitHub profile URL',
            },
            twitter: {
              type: 'string',
              description: 'Twitter profile URL',
            },
            linkedin: {
              type: 'string',
              description: 'LinkedIn profile URL',
            },
            expectedSalary: {
              type: 'number',
              description: 'Expected salary',
            },
            ownACar: {
              type: 'boolean',
              description: 'Owns a car',
            },
            haveDrivingLicense: {
              type: 'boolean',
              description: 'Has a driving license',
            },
            noticePeriod: {
              type: 'integer',
              description: 'Notice period in days',
            },
            immigrationStatus: {
              type: 'string',
              description: 'Immigration status',
            },
            referees: {
              type: 'string',
              description: 'List of referees',
            },
            willingToRelocate: {
              type: 'boolean',
              description: 'Willingness to relocate',
            },
            languages: {
              type: 'string',
              description: 'Known languages',
            },
            skills: {
              type: 'string',
              description: 'Skills',
            },
          },
          example: {
            name: 'John Doe',
            bio: 'A passionate developer with expertise in full-stack development.',
            location: 'San Francisco, CA',
            nationality: 'American',
            availability: true,
            dateOfBirth: '1990-01-01',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            address: '1234 Main St, San Francisco, CA',
            github: 'https://github.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            expectedSalary: 120000,
            ownACar: true,
            haveDrivingLicense: true,
            noticePeriod: 30,
            immigrationStatus: 'Citizen',
            referees: 'John Smith, Jane Doe',
            willingToRelocate: true,
            languages: 'JavaScript, TypeScript, Python',
            skills: 'Node.js, React, MySQL, Docker',
          },
        },
      },
    },
  },
  
  apis: ["src/routes/*.ts", "src/models/*.ts"], // Paths to files containing OpenAPI definitions
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec };
