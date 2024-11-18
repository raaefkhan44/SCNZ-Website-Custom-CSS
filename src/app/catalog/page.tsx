import HoodiesCard from "@/components/Hoodies";
import "../../styles/catalog.css"


export default function HoodiesList() {
    return (
        <div className="project-box">
            <h1 className="project-heading">All Collections</h1>
            <div className="main-div">

                <HoodiesCard
                    image="/images/batch-001.png"
                    name="BATCH 001"
                />
                <HoodiesCard
                    image="/images/batch-002.png"
                    name="BATCH 002"
                />
                <HoodiesCard
                    image="/images/batch-003.png"
                    name="BATCH 003"
                />
                <HoodiesCard
                    image="/images/batch-004.png"
                    name="BATCH 004"
                />
                <HoodiesCard
                    image="/images/batch-005.png"
                    name="BATCH 005"
                />
                <HoodiesCard
                    image="/images/batch-006.png"
                    name="BATCH 006"
                />
                <HoodiesCard
                    image="/images/batch-007.png"
                    name="BATCH 007"
                />
                <HoodiesCard
                    image="/images/batch-008.png"
                    name="BATCH 008"
                />
            </div>
        </div>
    );
}