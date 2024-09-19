interface ProfileFormData{
    userId:string,
    gender: string;
    email: string;
    dateOfBirth: string; // Ant Design DatePicker returns a Moment object
    address: string;
    describe: string;
    relationshipStatus: string;
}
export default ProfileFormData;