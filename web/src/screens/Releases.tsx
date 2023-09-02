/*
 * Copyright (c) 2021 - 2023, Ludvig Lundgren and the autobrr contributors.
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

import { ReleaseTable } from "./releases/ReleaseTable";

export const Releases = () => (
  <main>
    <header className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <h1 className="text-3xl font-bold text-black dark:text-white">Releases</h1>
      </div>
    </header>
    <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
      <ReleaseTable />
    </div>
  </main>
);