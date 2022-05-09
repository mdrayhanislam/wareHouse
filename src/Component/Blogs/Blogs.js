import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <Card className='mt-5'>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Difference between javascript and nodejs</Card.Title>
                    <Card.Text>
                        JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                        Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. It is an interpreted scripting language, and the code can only be executed and run in a web browser. We can use Node.js to execute and run the code outside of the browser. It's also known as a browser's language, and it can be used for both client-side and server-side development.
                        Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable server-side JavaScript applications.


                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mt-5'>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>When should you use nodejs and when should you use mongodb</Card.Title>
                    <Card.Text>
                        MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.
                        NodeJS's responsibilty is especially to execute your application.
                        Node. js is a rapidly growing technology that has been overtaking the world of server-side programming with surprising speed. MongoDB is a technology that's revolutionizing database usage. Together, the two tools are a potent combination, thanks to the fact that they both employ JavaScript and JSON.
                        First of all React.js and Node.js are for Frontend and backend respectively.

                        React is a frontend library and node is a runtime environment which helps javascript to execute on backend.

                        So as per your question if you are willing to become frontend developer then learn react.js and if you want to be backend developer then learn node.js.

                        Hope it helps.

                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mt-5'>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Differences between sql and nosql databases.</Card.Title>
                    <Card.Text>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        Prerequisites – SQL, NoSQL
                        When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.

                        The Main Differences:

                        Type –
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.


                        Language –
                        SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure.
                        Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.

                        SQL programming can be effectively used to insert, search, update, delete database records.
                        NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.

                        NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.

                        Traditional RDBMS uses SQL syntax to store and retrieve data for further insights. Instead, a NoSQL database system encompasses a wide range of database technologies that can store structured, semi-structured, unstructured and polymorphic data.

                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Blogs;