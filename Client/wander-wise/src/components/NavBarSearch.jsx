import { Autocomplete, Button, Select } from "@mantine/core";
import { IoFilter, IoSearch } from "react-icons/io5";
import DateRangePicker from 'react-bootstrap-daterangepicker';

export default function NavbarSearch() {
    return (
        <div className="flex justify-center border-blue-500 rounded-lg border-2 h-full">
            <div className="w-2/12">
                <Button
                    className="w-full bg-slate-800 hover:bg-slate-600 rounded-none rounded-1-md flex h-full"
                    size="md"
                >
                    <IoFilter />
                </Button>
            </div>
            <div className="w-3/12 h-full">
                <Autocomplete
                    placeholder="Where"
                    data={["Stintino", "Alghero", "Sassari", "Roma"]}
                    className="w-full h-full"
                    classNames={{
                        icon: "p-3",
                        input:
                            "border-white rounded-lg focus:border-black rounded-r-none rounded-l-none h-full",
                    }}
                    icon={<IoSearch />}
                    size="lg"
                />
            </div>
            <div className="3/12">

                <div className="w/2/12">
                    <Select
                        size="lg"
                        placeholder="Guests"
                        clearable
                        data={[
                            { value: 1, label: "1" },
                            { value: 2, label: "2" },
                            { value: 3, label: "3" },

                            { value: 4, label: "4" },
                            { value: 5, label: "5" },
                            { value: 6, label: "6" },
                            { value: 7, label: "7" },
                            { value: 8, label: "8" },
                            { value: 9, label: "9" },
                            { value: 10, label: "10+" },
                        ]}
                    />
                </div>
                <div className="w-2/12">
                    <Button
                        className="bg-black hover:bg-slate-800  rounded-none rounded-r-md h-full"
                        size="md"
                    >
                        Search
                    </Button>
                </div>
            </div>
            );
}