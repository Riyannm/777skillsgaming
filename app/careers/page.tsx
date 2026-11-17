import Navigation from "../components/ui/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Job openings at Vending & Delivery LLC, d/b/a 777 Skills, San Antonio, TX.",
};

// Advertisement text is reproduced word-for-word as supplied; do not edit
// wording, punctuation or figures without the employer's sign-off.
export default function CareersPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <span className="section-label mb-3 block">Careers</span>
          <h1 className="text-4xl md:text-5xl font-black text-foreground font-heading tracking-tight mb-12">
            Job Openings
          </h1>

          <article className="p-6 md:p-8 rounded-2xl border border-border bg-muted/20 space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-3">
                Job Opening for Database Administrator
              </h2>
              <p className="text-sm">
                The following website advertisement will be posted from
                <br />
                <span className="font-semibold text-foreground">
                  11/18/2026 – 12/23/2026
                </span>
              </p>
            </div>

            <p>
              Database Administrator needed w/ Master&rsquo;s Degree or Foreign
              Equivalent in Information Technology Management or Information
              Technology or Computer Science or Computer Engineering and six (6)
              months experience as a Database Administrator or Software
              Developer performing following job duties:
            </p>

            <p>
              Develop implement, maintain and support software applications,
              database systems and business technology solutions. Develop and
              optimize SQL queries, stored procedures, databases objects and
              data models. Maintain relational databases, monitor application
              and database performance. Implement data security, backup and
              recovery procedures and support data migration, integration, ETL
              and API connectivity initiatives. Contribute to software
              engineering, database management, system integration, reporting
              automation and business process improvement initiatives.
            </p>

            <div>
              <h3 className="text-lg font-bold text-foreground font-heading mb-2">
                Use:
              </h3>
              <p>
                SQL Server, T-SQL, Microsoft Azure, Power BI and Windows-based
                Enterprise Environments.
              </p>
              <p className="mt-2">
                The type of database that will be designed, developed, tested,
                and supported is MongoDB Atlas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground font-heading mb-2">
                Salary:
              </h3>
              <p>$139360.00 Per Year</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground font-heading mb-2">
                Benefits:
              </h3>
              <p>PTO</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground font-heading mb-2">
                Job Location:
              </h3>
              <p>San Antonio, TX. Telecommuting is permitted.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground font-heading mb-2">
                Mail Resumes to:
              </h3>
              <div className="text-foreground">
                <p className="font-semibold">
                  Vending &amp; Delivery LLC, d/b/a 777 Skills
                </p>
                <p>7001 I-10, Suite 229, San Antonio, TX 78213</p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:hr@777skills.com"
                    className="text-primary hover:underline"
                  >
                    hr@777skills.com
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
