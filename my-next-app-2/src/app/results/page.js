import { getresults } from "../api/results";

async function Resultpage() {
  const result = await getresults();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3"> Results info</h2>
        {/* Marks Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border">Subject</th>
                <th className="p-3 border">Marks Obtained</th>
                <th className="p-3 border">Total Mark</th>
                <th className="p-3 border">Grade</th>
                <th className="p-3 border">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {result.map((subj, i) => (
                <tr key={i} className="border-b hover:bg-gray-100">
                  <td className="p-3 border">{subj.subject}</td>
                  <td className="p-3 border">{subj.marks}</td>
                  <td className="p-3 border">{subj.totalMarks}</td>

                  <td className="p-3 border">
                    {subj.marks >= 90
                      ? "A+"
                      : subj.marks >= 80
                      ? "A"
                      : subj.marks >= 70
                      ? "B+"
                      : "B"}
                  </td>
                  <td className="p-3 border">
                    {subj.marks >= 80
                      ? "Excellent"
                      : subj.marks >= 70
                      ? "Good"
                      : "Needs Improvement"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Resultpage;
