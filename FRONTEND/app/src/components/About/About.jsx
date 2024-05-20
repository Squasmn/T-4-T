const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" max-w-4xl p-4 space-x-4 bg-neutral shadow-xl rounded-box mb-10 mt-10">
        <div className="p-6 space-y-6">
          <h1 className="text-4xl font-bold">Über uns</h1>
          <p className="text-lg">
            Diese Website wurde ursprünglich als Abschlussprojekt des DCI
            Jahreskurses Web Development erstellt. Da die Ambition zur
            Realisierung einer Plattform mit Nutzen für die echte Welt bereits
            zur Findungsphase der Gruppe bestand, wurde die Idee des Projekts
            auf die Realisierung einer Plattform zur Vermittlung von IT Talenten
            und Aufträgen festgelegt. Die Plattform soll es ermöglichen, dass
            Unternehmen und Freelancer sich auf einer Plattform treffen und
            Aufträge vergeben bzw. annehmen können. Mit diesem Ansatz möchten
            wir einen Beitrag zur Digitalisierung der Arbeitswelt leisten und
            die Vermittlung von IT Talenten und Aufträgen vereinfachen. Die
            Essenz der Plattform T4T besteht in der schnellen und einfachen
            Nutzung, einem Bezahlmodell ohne prozentuale Vermittlungsgebühr und
            einer Community von IT Talenten und Unternehmen, die sich
            gegenseitig unterstützen und voneinander profitieren.
          </p>
          <h2 className="text-3xl font-bold">Das Team</h2>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">Halid</div>
            <div className="collapse-content">
              <p>
                Halid ist versierter Entwickler in den Bereichen Frontend und
                Backend. Für dieses Projekt hat er sich auf die
                Backend-Entwicklung konzentriert und die Datenbankstruktur
                entworfen und implementiert. Darüber hinaus hat er die
                Authentifizierung und Autorisierung implementiert und die
                REST-APIs für die Kommunikation zwischen Frontend und Backend
                entwickelt.{" "}
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">David</div>
            <div className="collapse-content">
              <p>
                David ist ein versierter Entwickler in den Bereichen Frontend
                und Backend. Für dieses Projekt hat er sich auf die
                Frontend-Entwicklung konzentriert und die Benutzeroberfläche
                entworfen und implementiert. Darüber hinaus hat er die REST-APIs
                für die Kommunikation zwischen Frontend und Backend entwickelt.
                Außerdem fungierte er als Scrum Master und war für die
                Organisation und Koordination des Teams verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
