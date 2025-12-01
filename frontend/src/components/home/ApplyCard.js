import CustomButton from "../custom/Button"

const ApplyCard = ({className, title, description}) => {
  return (
    <div className={`bg-black/60 text-white rounded-xs px-6 py-4 flex flex-col gap-5 ${className}`}>
      <h1 className="text-3xl">{title}</h1>
      <p className="font-light">{description}</p>

      <div>
        <CustomButton
          buttonText={'Apply Now'}
          className={'rounded-sm bg-green-600 hover:bg-green-700 px-8'}
        />
      </div>
    </div>
  )
}

export default ApplyCard
