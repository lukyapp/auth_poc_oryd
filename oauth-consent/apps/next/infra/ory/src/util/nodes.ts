// Copyright © 2025 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { type UiNode, type UiNodeInputAttributes } from '@ory/client-fetch';

export function findScreenSelectionButton(
  nodes: UiNode[],
): { attributes: UiNodeInputAttributes } | undefined {
  return nodes.find(
    (node) =>
      node.attributes.node_type === 'input' &&
      node.attributes.type === 'submit' &&
      node.attributes.name === 'screen',
  ) as { attributes: UiNodeInputAttributes };
}
