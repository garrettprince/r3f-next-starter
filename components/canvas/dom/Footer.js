import React from 'react'
import Image from 'next/image';
import { CodeIcon } from '@heroicons/react/solid'

function Footer() {
    return (
        <div className="flex flex-col">
            <p className='text-white text-xs mx-auto mb-4'>For more minimal starter templates:</p>
              <a className="flex text-white mx-auto border px-4 py-2 hover:border-black hover:bg-white hover:text-black transform transition" href="https://garrett.cool">
                garrett.cool
              </a>
        </div>
    );
}

export default Footer
