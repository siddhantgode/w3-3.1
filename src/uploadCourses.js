// src/uploadCourses.js


import { db, collection, addDoc } from "./firebase.js"; 


const courses = [
    { id: 1, title: "Database Management Systems", topic: "Databases", rating: 4.4, cost: "₹ 499", image: "/images/DBMS_udemy.webp", link: "https://www.udemy.com/course/relational-database-management-systemrdbms-complete-pack/?couponCode=ST17MT31325G3" },
    { id: 2, title: "Operating Systems from Scratch", topic: "Operating Systems", rating: 4.7, cost: "₹ 499", image: "/images/os_udemy.jpg", link: "https://www.udemy.com/course/scheduling-algorithms-operting-systems-from-scratch/" },
    { id: 3, title: "Masterclass on Azure Data Factory", topic: "Databases", rating: 4.8, cost: "₹ 499", image: "/images/azure_udemy.svg", link: "https://www.udemy.com/course/azure-data-factory-data-engineer-real-time-projects/" },
    { id: 4, title: "Data Structures and Algorithms", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/DSA_udemy.png", link: "https://www.udemy.com/course/mastering-data-structures-and-algorithms-using-c-programming/" },
    { id: 5, title: "Mastering Control Systems", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/control_sys_udemy.jpg", link: "https://www.udemy.com/course/mastering-control-systems-very-basics-to-advance/" },
    { id: 6, title: "Signals and Systems", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/signals_udemy.jpg", link: "https://www.udemy.com/course/signals-and-systems-from-basics-to-advance/" },
    { id: 7, title: "Digital Signal Processing", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/signal_proces_udemy.webp", link: "https://www.udemy.com/course/learn-digital-signal-processing-from-basics-to-advance/" },
    { id: 8, title: "Compiler Design", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/compiler_udemy.png", link: "https://www.udemy.com/course/the-ultimate-compiler-design-full-course/" },
    { id: 9, title: "Analog Communication", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/analog_udemy.jpg", link: "https://www.udemy.com/course/learn-analog-communication-from-basics/" },
    { id: 10, title: "Digital System Design", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/digital_udemy.jpg", link: "https://www.udemy.com/course/the-ultimate-digital-system-design-module-2/" },
    { id: 11, title: "Theory of Computation", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/computation_udemy.webp", link: "https://www.udemy.com/course/theory-of-computation-automata-theory-for-2021/" },
    { id: 12, title: "Digital System Design 2", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/digital2_udemy.jpg", link: "https://www.udemy.com/course/learn-digital-system-design-module-1-from-basics/" },
    { id: 13, title: "Electrical Circuits 1", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/ele1_udemy.webp", link: "https://www.udemy.com/course/electrical-circuits-module-1-from-basics/" },
    { id: 14, title: "Electrical Circuits 2", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/ele2_udemy.jpg", link: "https://www.udemy.com/course/electrical-circuits-2-module-2/" },
    { id: 15, title: "Electrical Circuits 3", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/ele3_udemy.jpg", link: "https://www.udemy.com/course/the-ultimate-electrical-circuits-module-3/" },
    { id: 16, title: "Bipolar Junctions", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/bipolar_udemy.webp", link: "https://www.udemy.com/course/learn-bipolar-junction-transistor-bjt-from-basics/" },
    { id: 17, title: "Linked Lists", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/linked_list_udemy.png", link: "https://www.udemy.com/course/masterclass-linked-lists-exclusive-from-zero-to-hero/" },
    { id: 18, title: "Computer Network", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/computer_network.jpg", link: "https://www.udemy.com/course/mastering-internet-protocol-ipv4-and-subnetting/" },
    { id: 19, title: "Python for Beginners", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/python_udemy.png", link: "https://www.udemy.com/course/python-for-absolute-beginners-learn-with-simple-examples/" },
    { id: 20, title: "Linear Integrated Circuits", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/linear_circuits_udemy.jpg", link: "https://www.udemy.com/course/linear-integrated-circuits-and-applications-for-all-levels/" },
    { id: 21, title: "Computer Organization", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/computer_architecture_udemy.jpg", link: "https://www.udemy.com/course/computer-organization-and-architecture-scratch-to-advance/" },
    { id: 22, title: "Pointers and Structures", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/pointers_structures_udemy.webp", link: "https://www.udemy.com/course/c-pragramming-from-core-of-the-system/" },
    { id: 23, title: "Azure Data Explorer", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/azure_data_x_udemy.png", link: "https://www.udemy.com/course/azure-data-exploreradx-and-kusto-query-language-kql-2023/" },
    { id: 24, title: "MySQL ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/mySql_udemy.png", link: "https://www.udemy.com/course/azure-data-exploreradx-and-kusto-query-language-kql-2023/" },
    { id: 25, title: "Laplace Transformation ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/mySql_udemy.png", link: "https://www.udemy.com/course/learn-laplace-transform-from-basics/" },
    { id: 26, title: "MySQL ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/laplace_transform_udemy.png", link: "https://www.udemy.com/course/azure-data-exploreradx-and-kusto-query-language-kql-2023/" },
    { id: 27, title: "Linear Algebra ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/linear_algebra_udemy.png", link: "https://www.udemy.com/course/mastering-linear-algebra-for-2021/" },
    { id: 28, title: "Mastering Discrete Mathematics ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/discrete_maths_udemy.webp", link: "https://www.udemy.com/course/mastering-linear-algebra-for-2021/" },
    { id: 29, title: "Mastering Discrete Mathematics ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/discrete_maths_udemy.webp", link: "https://www.udemy.com/course/mastering-linear-algebra-for-2021/" },
    { id: 30, title: "Fabric Data Factory", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/data_factory_fabric_udemy.webp", link: "https://www.udemy.com/course/data-factory-in-microsoft-fabric-seamless-etl-and-analytics/" },
    { id: 31, title: "Fabric SQL", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/fabric_udemy.avif", link: "https://www.udemy.com/course/microsoft-fabric-sql-bootcamp-data-analytics-redefined/" },
    { id: 32, title: "Fabric SQL", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/azure_databricks_udemy.jpg", link: "https://www.udemy.com/course/microsoft-fabric-sql-bootcamp-data-analytics-redefined/" },
  
  
  
  
  
  
  ];

const uploadCourses = async () => {
  try {
    const coursesCollection = collection(db, "udemyCourses");

    for (const course of courses) {
      await addDoc(coursesCollection, course);
      console.log(`Uploaded: ${course.title}`);
    }

    console.log("✅ All courses uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading courses:", error);
  }
};

// Run the function when the script is executed
uploadCourses();
