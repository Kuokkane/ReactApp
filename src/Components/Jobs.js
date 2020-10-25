import React from 'react'
import Job from './Job'


function Jobs() {


    const jobs = [
        {
            name: 'Work History',
            details: [
                {
                    companyName: "Airpro Oy",
                    title: 'Airport Service Officer',
                    startMonth: "November",
                    startYear: 2008,
                    endMonth: "March",
                    endYear: 2013,
                    id: 1
                },
                {
                    companyName: "Suomen Telecenter",
                    title: 'Telemarketer',
                    startMonth: "December",
                    startYear: 2010,
                    endMonth: "March",
                    endYear: 2011,
                    id: 2
                },
                {
                    companyName: "Murata Electronics",
                    title: 'Process Operator',
                    startMonth: "April",
                    startYear: 2013,
                    endMonth: "July",
                    endYear: 2015,
                    id: 3
                },
                {
                    companyName: "3D Render",
                    title: 'Internship',
                    startMonth: "October",
                    startYear: 2016,
                    endMonth: "February",
                    endYear: 2017,
                    id: 4
                },
                {
                    companyName: "Veikkaus Oy",
                    title: 'Customer Support',
                    startMonth: "May",
                    startYear: 2017,
                    endMonth: "June",
                    endYear: 2017,
                    id: 5
                },
                {
                    companyName: "Webhelp Nordic",
                    title: 'Customer Advisor',
                    startMonth: "October",
                    startYear: 2017,
                    endMonth: "March",
                    endYear: 2018,
                    id: 6
                },
                {
                    companyName: "Leaseplan Finland",
                    title: 'Customer Service Specialist/IT-service desk',
                    startMonth: "May",
                    startYear: 2018,
                    endMonth: "August",
                    endYear: 2020,
                    id: 7
                },
            ]
        }
    ]
    return (
        <div>
            {jobs.map(job => (
                <Job key={job.details} job={job} />
            ))}
        </div>
    )
}

export default Jobs