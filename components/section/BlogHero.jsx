import Image from 'next/image'
import dot from "@/assets/icons/Ellipse 6.svg"
import arrowright from "@/assets/icons/Vector.svg"
import Link from 'next/link'
import blog1 from "@/assets/images/blog-1.png"

const BlogHero = ({date}) => {
  return (
    <section className='max-w-360 mx-auto xl:p-30 bg-white'>
            <div className="flex flex-row justify-between gap-20 max-lg:flex-col">
              <div className="w-135 flex flex-col my-auto max-lg:w-full h-auto">
                <div className="flex flex-col justify-center ">
                  <p className='inline-flex font-body text-[15px] leading-6 font-normal mb-2 items-center text-[#0C0C1CC7]'>
                    <span>{date}</span>
                    <span className='px-2'>
                      <Image
                      src={dot}
                      alt="icon"
                      width={3}
                      height={3}
                      />
                    </span>
                    <span>3 min read</span>
                  </p>
                  <h1 className='font-heading mt-2 mb-4 text-[56px] font-bold max-w-135 leading-14'>
                    The Invisible Client:<br/>
                    Designing for Nobody
                  </h1>
                  <p className='max-w-135 mt-4 mb-6 font-body text-[17px] whitespaces font-normal text-[#0C0C1CC7]'>
                    What happens when speculative buildings are designed not for a commissioning body but for the idea of a future inhabitant — an abstraction of human need? Three firms explore the strange freedom of designing without a client.
                  </p>
                  <Link href='/' className='flex leading-7 font-semibold text-[#F3D40A] mt-6 '>READ MORE 
                    <Image
                      src={arrowright}
                      alt="icon"
                      width={14}
                      height={12}className='ml-2'

                    />
                  </Link>
                </div>
              </div>
            <div className="w-144.25 h-178 rounded-[10px] bg-gray-200 mt-8">
              <div className="relative w-full aspect-577/712 rounded-[10px] overflow-hidden bg-gray-200">
                <Image
                  src={blog1}
                  alt="blog image"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            </div>
        </section>
  )
}

export default BlogHero; 