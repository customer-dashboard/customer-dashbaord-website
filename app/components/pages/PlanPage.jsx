import { AppProvider, BlockStack, Box, Button, Card, DataTable, Icon, InlineStack, Text, Tooltip } from '@shopify/polaris';
import React, { useEffect } from 'react'
import { AlertCircleIcon, CartSaleIcon, CheckCircleIcon, CheckIcon, ChevronDownIcon, MinusIcon, PlusCircleIcon, QuestionCircleIcon, XIcon } from "@shopify/polaris-icons";
function PlanPage() {
    useEffect(() => {
        window.scrollTo(0, 0);      
      }, []);

      const rows = [
        [<Box padding='100'>Manage profile & delivery address</Box>,<Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Order history</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Recently viewed products</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>ReOrder</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Contact form in order history</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Multi language</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Registration and profile forms</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Image Upload</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Add extra page</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Add extra tab</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Design customization</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Custom field ( profile )</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Third party app integration with account page</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Integration engineer</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Ticket and mail Support (24*7)</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Live chat support (9:30 AM - 6:00 PM IST, Mon to Fri)</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Dedicated success manager</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Migration support (Import data from existing app)</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
        [<Box padding='100'>Theme support ( unlimited )</Box>, <Icon source={CheckIcon} tone="base" />,<Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />, <Icon source={CheckIcon} tone="base" />],
      ];
    
  return (
    <>
    
        <div className="customer-dashboard-pro--plan-page pt-5 pb-5">
            <div className="container">
            <div className='pricing-page-title'>
                            <h1 className='page-title'>Pricing</h1>
                        </div>
                <div className="checkout-ectension--plan--page--wraper">
                    <AppProvider>
                    <Card padding={0}>
                    <DataTable
                        verticalAlign='middle'
                        columnContentTypes={[
                        'text',
                        'numeric',
                        'numeric',
                        'numeric'
                        ]}
                        headings={[
                            <Box padding='100' minHeight='100%'> <Text variant="headingLg" as="h2"  alignment='start'> Features </Text></Box>,
                            <BlockStack gap="200" inlineAlign="center">
                              <Text variant='headingSm' as='span' alignment="start">
                                Starter
                              </Text>
                              <Text variant='headingMd' as="p" alignment="start">
                               0-1500 Customers
                              </Text>
                            <Text variant="headingLg" as="h3" alignment="start">
                              $4 USD / month
                            </Text>
                          </BlockStack>,
                            <BlockStack gap="200" inlineAlign="center">
                                <Text variant='headingSm' as='span' alignment="start">
                                Growth
                                </Text>
                                <Text variant='headingMd' as="p" alignment="start">
                                1501-5000 Customers
                                </Text>
                                <Text variant="headingLg" as="h3" alignment="start">
                                $8 USD / month
                                </Text>
                            </BlockStack>,
                           <BlockStack gap="200" inlineAlign="center">
                                <Text variant='headingSm' as='span' alignment="start">
                                Advanced
                                </Text>
                                <Text variant='headingMd' as="p" alignment="start">
                                5001-25000 Customers
                                </Text>
                                <Text variant="headingLg" as="h3" alignment="start">
                                $12 USD / month
                                </Text>
                            </BlockStack>,
                            <BlockStack gap="200" inlineAlign="center">
                                 <Text variant='headingSm' as='span' alignment="start">
                                 Enterprise
                                 </Text>
                                 <Text variant='headingMd' as="p" alignment="start">
                                 Over 25000 customers
                                 </Text>
                                 <Text variant="headingLg" as="h3" alignment="start">
                                 $20 USD / month
                                 </Text>
                             </BlockStack>
                        ]}
                        rows={rows}
                        showTotalsInFooter
                        totalsName={<div className="feature-discription text-center mt-2 mb-2">
                            <a target='_blank' href='https://apps.shopify.com/customer-dashboard-pro'  variant="primary" size="sm" className=''>
                                View more
                               </a>
                           </div>}
                      totals={[,
                         <div className="feature-discription text-center mt-2 mb-2">
                        <a target='_blank' href='https://apps.shopify.com/customer-dashboard-pro' variant="primary" size="sm" className='plan--button btn header_btn btn-md d-none-991 btn btn-primary'>
                         Install now
                        </a>
                      </div>,'','','', ''
                    ]}
                     />
                    </Card>
                    </AppProvider>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default PlanPage