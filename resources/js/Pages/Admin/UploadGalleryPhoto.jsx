import {Head, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useEffect} from "react";

export default function UploadGalleryPhoto({auth}) {
    const {flash} = usePage().props;
    const {data, setData, post, processing, errors, reset} = useForm({
        category: '',
        image: null
    })

    const submit = (e) => {
        e.preventDefault();
        post('/upload-foto', {
            headers: {
                'Content-Type': 'multipart/form-data'
            },

        });
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
                        {flash.message && (
                            <div className="p-4 bg-green-500 rounded-md text-white mb-6">
                                {flash.message}
                            </div>
                        )}
                        <form onSubmit={submit}>
                            <div className="mb-6">
                                <InputLabel htmlFor="category" value="Category"/>

                                <select id="category"
                                        value={data.category}
                                        onChange={e => setData('category', e.target.value)}
                                        className="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                    <option value="">--PILIH KATEGORI--</option>
                                    <option value="Pleno 1">Rapat Pleno 1</option>
                                    <option value="Pleno 2">Rapat Pleno 2</option>
                                    <option value="Pleno 3">Rapat Pleno 3</option>
                                    <option value="FACE">FACE</option>
                                    <option value="CHROMA">CHROMA</option>
                                    <option value="MASK">MASK</option>
                                </select>

                                <InputError message={errors.category} className="mt-2"/>
                            </div>
                            <div className="mb-10">
                                <InputLabel htmlFor="image" value="Foto"/>

                                <input
                                    className="block w-full md:w-1/2 text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                    id="image" multiple={true} onChange={e => setData('image', e.target.files)}
                                    type="file"/>

                                <InputError message={errors.image} className="mt-2"/>
                            </div>

                            <PrimaryButton disabled={processing}>
                                Submit
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
