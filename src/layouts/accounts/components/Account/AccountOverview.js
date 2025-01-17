/**
 * Copyright (c) 2022 Protocon Network. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

// @mui material components
import { Icon } from "@mui/material";

// Protocon Explorer React components
import PEOverviewAttribute from "components/PEOverviewAttribute";

function AccountOverview({ address, owner, onClick }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
            Account Overview
          </MDTypography>

          <MDBox display="flex" alignItems="center" ml={{ xs: -1.5, sm: 0 }}>
            <MDButton variant="outlined" color={darkMode ? "white" : "dark"} onClick={onClick}>
              <Icon>data_object</Icon>&nbsp;raw
            </MDButton>
          </MDBox>
        </MDBox>
        <PEOverviewAttribute title="Type" value={owner ? "Contract Account" : "General Account"} />
        <PEOverviewAttribute title="Address" value={address} />
        {owner && <PEOverviewAttribute title="Owner" value={owner} url={`/account/${owner}`} />}
      </MDBox>
    </MDBox>
  );
}

AccountOverview.defaultProps = {
  owner: "",
};

// Typechecking props for the Bill
AccountOverview.propTypes = {
  owner: PropTypes.string,
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AccountOverview;
