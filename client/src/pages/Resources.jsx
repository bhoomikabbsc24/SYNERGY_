import { useState } from "react";
import "./resources.css";

function Resources() {
  const [activeFilter, setActiveFilter] = useState("All resources");

  const resources = [
    {
      id: 1,
      icon: "📘",
      type: "Notes",
      title: "Database Management Systems — Unit 3 Notes",
      description:
        "Complete Unit 3 notes covering SQL, transactions and database concepts.",
      course: "CS2201",
      sharedBy: "Student",
    },
    {
      id: 2,
      icon: "📄",
      type: "Question Papers",
      title: "Numerical Methods — Previous Year Paper",
      description:
        "Previous year question paper covering interpolation, integration and numerical methods.",
      course: "CS2807",
      sharedBy: "Student",
    },
    {
      id: 3,
      icon: "📚",
      type: "Books",
      title: "Distributed Computing — Reference Book",
      description:
        "Useful reference material for distributed systems, HDFS and distributed computing concepts.",
      course: "CS2501",
      sharedBy: "Student",
    },
    {
      id: 4,
      icon: "📝",
      type: "Notes",
      title: "Object Oriented Programming — Java Notes",
      description:
        "Notes covering Java classes, objects, inheritance, interfaces and exceptions.",
      course: "CS2053",
      sharedBy: "Student",
    },
  ];

  const filters = [
    "All resources",
    "Notes",
    "Question Papers",
    "Books",
  ];

  const filteredResources =
    activeFilter === "All resources"
      ? resources
      : resources.filter(
          (resource) => resource.type === activeFilter
        );

  return (
    <div className="resources-page">

      {/* NAVBAR */}
      <nav className="resources-nav">

        <div className="resources-logo">
          SYNERGY
        </div>

        <div className="resources-nav-right">

          <button className="resources-nav-button">
            🔔
          </button>

          <button className="resources-profile-button">
            <span className="resources-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>

        </div>

      </nav>


      {/* MAIN CONTENT */}
      <main className="resources-content">

        {/* HEADER */}
        <section className="resources-header">

          <p className="small-heading">
            CAMPUS LIBRARY
          </p>

          <h1>
            Study Resources
          </h1>

          <p>
            Find notes, books, question papers and useful study
            material shared by your campus community.
          </p>

        </section>


        {/* FILTERS */}
        <section className="resources-filters">

          {filters.map((filter) => (
            <button
              key={filter}
              className={`resource-filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}

        </section>


        {/* RESOURCE LIST */}
        <section className="resources-list">

          {filteredResources.map((resource) => (

            <article
              className="resource-card"
              key={resource.id}
            >

              <div className="resource-card-icon">
                {resource.icon}
              </div>


              <div className="resource-card-content">

                <div className="resource-card-type">
                  {resource.type}
                </div>

                <h2>
                  {resource.title}
                </h2>

                <p>
                  {resource.description}
                </p>

                <div className="resource-card-meta">
                  <span>
                    {resource.course}
                  </span>

                  <span>•</span>

                  <span>
                    Shared by {resource.sharedBy}
                  </span>
                </div>

              </div>


              <button className="resource-view-button">
                View →
              </button>

            </article>

          ))}


          {/* NO RESULTS */}
          {filteredResources.length === 0 && (
            <div className="no-resources">
              <h2>No resources found</h2>

              <p>
                There are no resources in this category yet.
              </p>
            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default Resources;