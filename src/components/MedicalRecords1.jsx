import React from "react";

const MedicalRecords = ({ prescriptions }) => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">
                Medical Records
            </h2>

            {prescriptions.length === 0 ? (
                <p className="text-gray-500">
                    No prescriptions found.
                </p>
            ) : (
                <div className="space-y-5">
                    {prescriptions.map((item) => (
                        <div
                            key={item._id}
                            className="border rounded-xl p-5 bg-white shadow"
                        >
                            <div className="flex justify-between mb-4">
                                <h3 className="font-bold">
                                    Prescription
                                </h3>

                                <span className="text-sm text-gray-500">
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="space-y-3">

                                <div>
                                    <p className="font-semibold">
                                        Diagnosis
                                    </p>

                                    <p>{item.diagnosis}</p>
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Medications
                                    </p>

                                    <p>{item.medications}</p>
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Doctor's Notes
                                    </p>

                                    <p>{item.notes}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MedicalRecords;