import {Head, router, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useState} from "react";

export default function UploadGalleryPhoto({auth}) {
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [showError, setShowError] = useState(false)
    const [errors, setErrors] = useState('')
    const MAX_CATEGORY_LENGTH = 30;
    const {message} = usePage().props;

    const handleCategoryChange = e => {
        let category = e.target.value;
        if (category.length <= MAX_CATEGORY_LENGTH) {
            setShowError(false);
            setCategory(category);
        } else {
            setShowError(true);
            setErrors('Kategori terlalu panjang!');
        }
    }

    const handleFileChange = e => {
        setImage(e.target.files[0])
    }

    const submit = async () => {
        const formData = new FormData();
        formData.append('category', category)
        formData.append('image', image)
        try {
            await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (e) {
            setShowError(true);
            setErrors('Terjadi kesalahan: ' + e)
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Upload Foto Gallery</h2>}
        >
            <Head title="Upload Foto Gallery"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10">
                        {showError && (
                            <div className="p-4 bg-red-500 rounded-md text-white mb-6">
                                <p className="font-bold">Error:</p>
                                {errors}
                            </div>
                        )}
                        {message && (
                            <div className="p-4 bg-green-500 rounded-md text-white mb-6">
                                <p className="font-bold">Error:</p>
                                {errors}
                            </div>
                        )}
                        <div className="mb-6">
                            <InputLabel htmlFor="category" value="Category"/>

                            <TextInput
                                id="category"
                                type="text"
                                name="category"
                                value={category}
                                className="mt-1 block w-1/2"
                                onChange={handleCategoryChange}
                            />

                            {/*<InputError message={errors.category} className="mt-2"/>*/}
                        </div>
                        <div className="mb-10">
                            <InputLabel htmlFor="image" value="Foto"/>

                            <input
                                className="block w-1/2 text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                id="image" multiple={true} onChange={handleFileChange} type="file"/>

                            {/*<InputError message={errors.category} className="mt-2"/>*/}
                        </div>

                        <PrimaryButton onClick={submit}>
                            Submit
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
