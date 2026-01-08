"use server";
import { revalidatePath } from "next/cache";
import RegisterService from "../../services/register.service";

export async function createRegisterAction(payload) {
    try {
        const payload = [
            personalDetails = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                dob: formData.get("dob"),
                gender: formData.get("gender"),
                address: formData.get("address")
            },
            academicDetails = {
                highSchool: formData.get("highSchool"),
                yearOfCompletion: formData.get("yearOfCompletion"),
                qualification: formData.get("qualification"),
                currentStatus: formData.get("currentStatus"),
                gradeObtained: formData.get("gradeObtained"),
                course: formData.get("course")
            },
            parentDetails = {
                fatherName: formData.get("fatherName"),
                fatherPhone: formData.get("fatherPhone"),
                motherName: formData.get("motherName"),
                motherPhone: formData.get("motherPhone"),
                fatherProfession: formData.get("fatherProfession"),
                motherProfession: formData.get("motherProfession")
            },
            emergencyContact = {
                name: formData.get("name"),
                relation: formData.get("relation"),
                phone: formData.get("phone"),
                address: formData.get("address"),
                secondaryPhone: formData.get("secondaryPhone")
            }
        ];
        await RegisterService.create(payload)
        revalidatePath("/")
        
        return {success: true}
    }
     catch (error) {
        return {
            success: false,
            message: "Failed to create new student"
        }
    }
}