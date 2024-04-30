import Navbar from '@/app/components/shared/_navbar/Navbar';
import Footer from '@/app/components/shared/footer/Footer';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto pb-6 px-5'>
        <h2 className='font-semibold pt-20 text-2xl'>Terms & Conditions</h2>

        <div className='flex flex-col gap-2'>
          <p>Welcome to Biz Token Mining. By accessing or using our mining application, you agree to comply with the following terms and conditions:</p>

          <ul class="list-outside list-disc flex flex-col gap-2">

            <li><span className='font-semibold'>Free Mining Duration:</span>  {" Free mining services are available for a period of one (1) year from the date of registration."}</li>

            <li><span className='font-semibold'> Conversion to Governess Coin:</span>  {" Upon completion of the mining period, all mined tokens will be automatically deposited into the user's Governess Coin account."}</li>

            <li><span className='font-semibold'> Conversion to Native  Coin (BIZT):</span> Users have the option to convert or swap their Governess Coin to Native Coin (BIZT) every 30 days. The conversion ratio will be determined based on the live rate of BIZT on the designated exchange platform.</li>

            <li><span className='font-semibold'> Transaction Process:</span> All types of transactions, including mining, conversion, and swapping, will be conducted using the BIZT own Smart Chain and BIZ Wallet.</li>

            <li><span className='font-semibold'> Affiliate Commission:</span> Affiliate commission earned through referrals can be utilized for the purchase of hash power within the mining application.</li>

            <li><span className='font-semibold'> Monthly Conversion Limit:</span> Users are allowed to convert Governess Coin to Native Coin once per month.</li>

            <li><span className='font-semibold'> Staking: </span>Staking is only available for the Native Coin (BIZT) within the mining application.

              By using the Biz Token Mining application, you acknowledge and agree to abide by these terms and conditions. Failure to comply with these terms may result in the suspension or termination of your account.

              Please note that these terms and conditions are subject to change at any time without prior notice. It is your responsibility to review and familiarize yourself with the latest version of the terms and conditions.

              If you have any questions or concerns regarding these terms and conditions, please contact our support team for assistance.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;