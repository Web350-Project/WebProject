'use server'
import repo from '../repo/repo'
export async function fetchTopClassesByEnrollment() {
    return await repo.getTopClassesByEnrollment()
}

export async function fetchTopCoursesByGrade() {
    return await repo.getTopCoursesByGrade()
}

export async function fetchTopStudentsByGPA() {
    return await repo.getTopStudentsByGPA()
}

export async function fetchTopCategoriesByGrade() {
    return await repo.getTopCategoriesByGrade()
}

export async function fetchLowestCoursesByGrade() {
    return await repo.getLowestCoursesByGrade()
}

export async function fetchHighestFailureRateCourses() {
    return await repo.getHighestFailureRateCourses()
}

export async function fetchBestCourseInEachCategory() {
    return await repo.getBestCourseInEachCategory()
}

export async function fetchEnrollmentTrends() {
    return await repo.getEnrollmentTrends()
}

export async function fetchCreditDistribution() {
    return await repo.getCreditDistribution()
}

export async function fetchStudentsInEachCategory() {
    return await repo.getStudentsInEachCategory()
}

export async function fetchPrerequisiteImpact() {
    return await repo.getPrerequisiteImpact()
}
export async function fetchInstructorsPerCategory() {
    return await repo.getInstructorsPerCategory();
}
export async function fetchStudentsWithCoursesAndInstructors() {
    return await repo.getStudentsWithCoursesAndInstructors();
}