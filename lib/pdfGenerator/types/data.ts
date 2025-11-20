

/**
 * @description Contract for student and school Data,any caller must implement this contract irrespective source of data
 */
export interface AttestationDataProps {
    student: StudentInfoProps,
    school: SchoolInfoProps,
}

interface StudentInfoProps {
    name: string;
    parent: string,
    matricule: string,
    level: string,
    field: string;
    specialty: string;
    location: string;
    admission_year: string;
    issue_date: string;
}

interface SchoolInfoProps {
    fullname?: string,
    acronym: string,
    director: string,
    contacts: string[],
    authorization: string,
    socialhandles?: {
        facebook?: string,
        instagram?: string,
        website?: string,
        twitter?: string
    },
    disciplines: string[],
    location:string
}


